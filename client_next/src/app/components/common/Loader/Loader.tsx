import React, { FC } from "react";
import styles from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.load} />
    </div>
  );
};

export default Loader;
