import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export const checkUser = async (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get(ctx);

  return fetch("http://localhost:8080/users/me", {
    headers: {
      Authorization: `Bearer ${_token}`,
    },
  })
    .then((data) => data.json())
    .then((result) => ({
      props: result,
    }))
    .catch(() => ({
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    }));
};
