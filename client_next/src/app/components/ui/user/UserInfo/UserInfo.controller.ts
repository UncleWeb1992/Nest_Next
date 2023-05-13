import { useGetMeQuery } from "@/api/auth";

export const useUserInfoController = () => {
  const { data } = useGetMeQuery({});

  return {
    user: data,
  };
};
