"use client";

import { useGetMeQuery } from "@/api/auth";
import { AuthTabs } from "@/constans/tabs";
import { Tabs } from "antd";
import { useRouter } from "next/navigation";
import { FC, useLayoutEffect } from "react";

const Links: FC = () => {
  const { data } = useGetMeQuery({});
  const { replace } = useRouter();

  useLayoutEffect(() => {
    data && replace("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Tabs
      centered
      style={{ textAlign: "center", marginTop: 50 }}
      items={AuthTabs}
    />
  );
};

export default Links;
