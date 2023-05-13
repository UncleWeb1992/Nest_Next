"use client";

import { Button, Menu } from "antd";
import { FC } from "react";
import { useDashboardPanelController } from "./DahboardPanel.controller";
import {
  DeleteOutlined,
  FileImageOutlined,
  FileOutlined,
} from "@ant-design/icons";
import styles from "./DaahsboardPanel.module.scss";
import { UploadButton } from "@/app/components/common/UploadButton";

const DashboardMenu: FC = () => {
  const { currentPath, push } = useDashboardPanelController();
  return (
    <div className={styles.container}>
      <UploadButton />
      <Menu
        className={styles.menu}
        mode="inline"
        selectedKeys={[
          currentPath || "/dashboard?photos" || "/dashboard?trash",
        ]}
        items={[
          {
            key: "/dashboard?photos",
            icon: <FileImageOutlined />,
            label: "Photos",
            onClick: () => push("/dashboard?photos"),
          },
          {
            key: "/dashboard?trash",
            icon: <DeleteOutlined />,
            label: "Trash",
            onClick: () => push("/dashboard?trash"),
          },
        ]}
      />
    </div>
  );
};

export default DashboardMenu;
