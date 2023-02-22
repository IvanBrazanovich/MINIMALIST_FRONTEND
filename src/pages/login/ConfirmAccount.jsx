import React, { useState } from "react";
import styles from "../../styles/pages/layoutAuth.module.scss";
import { useDispatch } from "react-redux";
import { setAlertAsync } from "../../features/login/loginSlice";
import { useSelector } from "react-redux";
import Alert from "../../components/Alert";

const ConfirmAccount = () => {
  // State
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.login.alert);

  return (
    <div className={styles.form__container}>
      <h1>Confirm Account</h1>

      <form className={styles.form}>{alert.msg && <Alert />}</form>
    </div>
  );
};

export default ConfirmAccount;
