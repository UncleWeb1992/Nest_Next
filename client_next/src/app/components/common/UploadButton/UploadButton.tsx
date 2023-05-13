"use client";

import { Button, Upload } from "antd";
import { FC } from "react";
import styles from "./UploadButtom.module.scss";
import { useUploadButtonController } from "./UploadButton.controller";

const UploadButton: FC = () => {
  const { isLoading, onSumbit } = useUploadButtonController();
  return (
    <Upload
      customRequest={onSumbit}
      className={styles.upload}
      fileList={[]}
      style={{ width: "100%" }}
    >
      <Button loading={isLoading} type="primary" style={{ width: "100%" }}>
        Upload
      </Button>
    </Upload>
  );
};

export default UploadButton;
