import React from "react";
import { useState } from "react";
import styles from "../../../styles/pages/newProject.module.scss";

const Text1 = () => {
  const [text1, setText1] = useState("text example");
  const [text2, setText2] = useState("text example");
  const [text3, setText3] = useState("text example");
  const [text4, setText4] = useState("text example");

  return (
    <div className={styles.text1} code-type="T-1">
      <input
        onChange={(e) => setText1(e.target.value)}
        type="text"
        order="input-1"
        value={text1}
      />
      <input
        onChange={(e) => setText2(e.target.value)}
        type="text"
        order="input-2"
        value={text2}
      />
      <input
        onChange={(e) => setText3(e.target.value)}
        type="text"
        order="input-3"
        value={text3}
      />
      <input
        onChange={(e) => setText4(e.target.value)}
        type="text"
        order="input-4"
        value={text4}
      />
    </div>
  );
};

export default Text1;
