import React, { useState } from "react";
import styles from "../../styles/pages/layoutAuth.module.scss";
import { useDispatch } from "react-redux";
import { setAlertAsync } from "../../features/login/loginSlice";
import { useSelector } from "react-redux";
import Alert from "../../components/Alert";

const Login = () => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.login.alert);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if ([password, email].map((item) => item.trim()).includes("")) {
      return dispatch(
        setAlertAsync({ msg: "All fields are required", error: true })
      );
    }
  };

  return (
    <div className={styles.form__container}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        {alert.msg && <Alert />}

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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
