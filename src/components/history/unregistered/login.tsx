import { GITHUB_CLIENT_ID } from "@/env";
import { uuid } from "@/utils/uuid";

import styles from "./login.module.scss";

const login = () => {
  const loginProcessing = () => {
    const csrf = uuid();
    localStorage.setItem("csrf", csrf);
    location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${location.protocol}//${location.host}/callback&state=${csrf}`;
  };

  //TODO: スマホに適する処理に差し替え
  return (
    <button className={styles.button} onClick={loginProcessing}>
      ログインする
    </button>
  );
};

export default login;
