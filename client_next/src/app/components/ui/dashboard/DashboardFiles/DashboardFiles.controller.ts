import { FileItem } from "@/api/dto/files.dto";
import { useDeleteFileMutation, useGetFilesQuery } from "@/api/files";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const useDashboardFilesController = () => {
  const { get } = useSearchParams();
  const [fetchDelete, { isLoading }] = useDeleteFileMutation();
  const [deletedFileId, setDeletedFilesId] = useState(0);

  const isTrash = get("trash") !== null;
  const isPhotos = get("photos") !== null;

  const type = isTrash ? "trash" : isPhotos ? "photos" : "all";

  const { data } = useGetFilesQuery({ type });

  const getImageUrl = (file: FileItem) => {
    return "http://localhost:8080/uploads/" + file.fileName;
  };

  const handleDelete = async (id: number) => {
    setDeletedFilesId(id);

    await fetchDelete({ id });
  };

  const loadCurrentItem = (id: number) => deletedFileId === id;

  return {
    isPhotos,
    files: data,
    isLoading,
    getImageUrl,
    handleDelete,
    loadCurrentItem,
  };
};
