import React from "react";
import styles from "../../../styles/pages/newProject.module.scss";
import { useState } from "react";

const Formulario1 = (isDragabble = false) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form className={styles.form} code-type="F-1">
      {alert.msg && <Alert />}
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        id="name"
        placeholder="Name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        id="email"
        placeholder="Email"
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

export default Formulario1;
