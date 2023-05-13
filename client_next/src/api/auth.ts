import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "./baseQuery";
import { AuthLoginDto, AuthRegisterDto } from "./dto/auth.dto";
import { UserDto } from "./dto/user.dto";

type ResponseLoginType = {
  token: string;
};

enum Endpoints {
  Login = "auth/login",
  Register = "auth/register",
  GetMe = "users/me",
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<ResponseLoginType, AuthLoginDto>({
      query: (data: AuthLoginDto) => ({
        url: Endpoints.Login,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation<ResponseLoginType, AuthRegisterDto>({
      query: (data: AuthRegisterDto) => ({
        url: Endpoints.Register,
        method: "POST",
        body: data,
      }),
    }),
    getMe: builder.query<UserDto, unknown>({
      query: () => Endpoints.GetMe,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetMeQuery } = authApi;
