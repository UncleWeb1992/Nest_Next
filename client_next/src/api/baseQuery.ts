import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { parseCookies } from "nookies";

const BaseUrl = "http://localhost:8080/";

export const baseQuery = fetchBaseQuery({
  baseUrl: BaseUrl,
  prepareHeaders: async (headers) => {
    const { _token } = parseCookies();
    if (_token) {
      headers.set("Authorization", `Bearer ${_token}`);
    }
    return headers;
  },
});
