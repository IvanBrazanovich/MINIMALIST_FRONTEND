import React, { useState } from "react";
import styles from "../../styles/pages/layoutAuth.module.scss";

const Login = () => {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (
      [name, password, confirmPassword, email]
        .map((item) => item.trim())
        .includes("") ||
      password != confirmPassword
    ) {
      console.log("errado");
      console.log(name, password, email, confirmPassword);
    }
  };

  return (
    <div className={styles.form__container}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="Password"
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          id="confirm-password"
          placeholder="Confirm Password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
