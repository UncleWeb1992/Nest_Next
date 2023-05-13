import { usePathname, useRouter } from "next/navigation";
import { destroyCookie } from "nookies";

export const useHeaderController = () => {
  const { push, replace } = useRouter();
  const pathname = usePathname();

  const logOut = () => {
    destroyCookie(null, "_token", { path: "/" });
    replace("/");
  };

  return {
    pathname,
    push,
    logOut,
  };
};
