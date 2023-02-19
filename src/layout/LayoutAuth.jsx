import React from "react";
import { Outlet } from "react-router";
import styles from "../styles/pages/layoutAuth.module.scss";

const LayoutAuth = () => {
  return (
    <div className={styles.layoutAuth}>
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
