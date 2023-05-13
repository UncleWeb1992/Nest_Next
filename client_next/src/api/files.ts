import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "./baseQuery";
import { FileItem } from "./dto/files.dto";

type RequestGetFiles = {
  type: "all" | "photos" | "trash";
};

const endpoint = "files";

export const filesApi = createApi({
  reducerPath: "filesApi",
  baseQuery,
  tagTypes: ["files"],
  endpoints: (builder) => ({
    getFiles: builder.query<FileItem[], RequestGetFiles>({
      query: ({ type }: RequestGetFiles) => ({
        url: endpoint,
        params: { type },
      }),
      providesTags: ["files"],
    }),
    createFile: builder.mutation<FileItem, FormData>({
      query: (data: FormData) => ({
        url: endpoint,
        method: "POST",
        body: data,
      }),
      invalidatesTags: () => ["files"],
    }),
    deleteFile: builder.mutation<string, { id: number }>({
      query: ({ id }: { id: number }) => ({
        url: endpoint,
        method: "DELETE",
        params: { id },
      }),
      invalidatesTags: () => ["files"],
    }),
  }),
});

export const {
  useCreateFileMutation,
  useDeleteFileMutation,
  useGetFilesQuery,
} = filesApi;
