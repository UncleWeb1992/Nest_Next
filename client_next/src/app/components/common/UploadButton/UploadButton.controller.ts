import { useCreateFileMutation } from "@/api/files";

export const useUploadButtonController = () => {
  const [fetchFile, { isLoading }] = useCreateFileMutation();

  const onSumbit = async (options: any) => {
    if ("file" in options) {
      const { file } = options;
      const fd = new FormData();
      fd.set("file", file);
      await fetchFile(fd);
    }
  };

  return {
    isLoading,
    onSumbit,
  };
};
