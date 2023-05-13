"use client";

import { FC } from "react";
import { useDashboardFilesController } from "./DashboardFiles.controller";
import styles from "./DashboardFiles.module.scss";
import { Image } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { filesColor, getColorByExt, getImageExt } from "@/utils/image";

const DashboardFiles: FC = () => {
  const {
    files,
    isPhotos,
    isLoading,
    getImageUrl,
    handleDelete,
    loadCurrentItem,
  } = useDashboardFilesController();
  return (
    <div className={styles.container}>
      <div className={styles.fileList}>
        {!!files &&
          files.map((file) => (
            <div key={file.id} className={styles.file}>
              <Image sizes="cover" src={getImageUrl(file)} alt="photo" />
              {isPhotos && (
                <div
                  className={styles.close}
                  onClick={handleDelete.bind(null, file.id)}
                >
                  <DeleteOutlined title="delete" />
                </div>
              )}

              <div
                className={styles.ext}
                style={{
                  backgroundColor: getColorByExt(getImageExt(file.fileName)),
                }}
              >
                {getImageExt(file.fileName)}
              </div>

              {isLoading && loadCurrentItem(file.id) && (
                <div className={styles.loadContainer}>
                  <div className={styles.load} />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardFiles;
