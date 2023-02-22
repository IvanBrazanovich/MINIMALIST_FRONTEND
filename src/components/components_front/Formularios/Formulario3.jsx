import React from "react";
import styles from "../../../styles/pages/newProject.module.scss";
import { useState } from "react";

const Formulario3 = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form className={styles.form}>
      {alert.msg && <Alert />}
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        id="name"
        placeholder="Name"
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        id="password"
        placeholder="Password"
      />
      <input
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        type="password"
        id="confirm-password"
        placeholder="Confirm Password"
      />

      <button type="submit">Applicate</button>
    </form>
  );
};

export default Formulario3;
