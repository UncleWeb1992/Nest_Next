import { useRegisterMutation } from "@/api/auth";
import { AuthRegisterDto } from "@/api/dto/auth.dto";
import { setCookie, destroyCookie } from "nookies";
import { notification } from "antd";
import { useRouter } from "next/navigation";

export const useRegisterFormController = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const { replace } = useRouter();

  const onSubmit = async (data: AuthRegisterDto) => {
    const response = await register(data);

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
