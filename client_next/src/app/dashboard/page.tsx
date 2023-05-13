import React from "react";
import { NextPage } from "next";
import { DashboardPanel } from "../components/ui/dashboard/DashboardMenu";
import styles from "./Dashboard.module.scss";
import { DashboardFiles } from "../components/ui/dashboard/DashboardFiles";

const Dashboard: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <DashboardPanel />
      </div>
      <div className={styles.right}>
        <DashboardFiles />
      </div>
    </div>
  );
};

export default Dashboard;
