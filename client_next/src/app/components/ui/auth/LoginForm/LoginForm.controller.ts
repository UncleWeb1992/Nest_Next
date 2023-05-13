import { useLoginMutation } from "@/api/auth";
import { AuthLoginDto } from "@/api/dto/auth.dto";
import { setCookie } from "nookies";
import { notification } from "antd";
import { useRouter } from "next/navigation";

export const useLoginFormController = () => {
  const [login, { isLoading }] = useLoginMutation();
  const { replace } = useRouter();

  const onSubmit = async (data: AuthLoginDto) => {
    const response = await login(data);

    if (response && "data" in response) {
      const { token } = response.data;

      setCookie(null, "_token", token, {
        path: "/",
      });
      notification.success({
        message: "Success",
        description: "Go to dashboard",
        duration: 2,
      });

      replace("/dashboard");
    } else {
      notification.error({
        message: "Error",
        description: "Not valid data",
        duration: 2,
      });
    }
  };

  return {
    isLoading,
    onSubmit,
  };
};
