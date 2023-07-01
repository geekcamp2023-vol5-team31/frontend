import { useState } from "react";

import styles from "./login.module.css";

const login = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  const loginProcessing = () => {
    //ログイン時の処理
    console.log("ログインしました");
  };

  //TODO: スマホに適する処理に差し替え
  return (
    <button
      className={`${styles.button} ${isPressed ? styles.buttonPressed : ""}`}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onClick={loginProcessing}
    >
      ログインする
    </button>
  );
};

export default login;
