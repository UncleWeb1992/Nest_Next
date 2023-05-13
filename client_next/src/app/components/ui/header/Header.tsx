"use client";

import { FC } from "react";
import { Popover, Layout, Avatar, Menu, Button } from "antd";
import { CloudOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";
import { useHeaderController } from "./Header.controller";

const Header: FC = () => {
  const { pathname, push, logOut } = useHeaderController();

  return (
    <Layout.Header className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined style={{ marginRight: 10 }} />
            Cloud-storage
          </h2>
          <Menu
            theme="dark"
            mode="horizontal"
            className={styles.topMenu}
            defaultSelectedKeys={[pathname]}
            onSelect={({ key }) => push(key)}
            items={[
              { key: "/dashboard", label: "Main" },
              { key: "/dashboard/profile", label: "Profile" },
            ]}
          />
        </div>
        <div className={styles.headerRight}>
          <Popover
            style={{ cursor: "pointer" }}
            trigger="click"
            content={
              <Button onClick={logOut} type="primary" danger>
                LogOut
              </Button>
            }
          >
            <Avatar>A</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
