"use client";

import React, { FC } from "react";
import { useUserInfoController } from "./UserInfo.controller";
import styles from "./UserInfo.module.scss";

const UserInfo: FC = () => {
  const { user } = useUserInfoController();
  return (
    <div className={styles.container}>
      <span>
        ID: <strong>{user?.id}</strong>
      </span>
      <span>
        Name: <strong>{user?.fullName}</strong>
      </span>
      <span>
        Email: <strong>{user?.email}</strong>
      </span>
    </div>
  );
};

export default UserInfo;
