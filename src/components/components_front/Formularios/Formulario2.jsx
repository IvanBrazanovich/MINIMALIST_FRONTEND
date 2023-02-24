import React from "react";
import styles from "../../../styles/pages/newProject.module.scss";
import { useState } from "react";

const Formulario2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form className={styles.form} code-type="F-2">
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

      <button type="submit">Applicate</button>
    </form>
  );
};
export default Formulario2;
