import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { AuthEndpointRes } from "@/@types/AuthEndpoint";
import { AuthContext } from "@/context/auth";

const Callback = () => {
  const { query, push } = useRouter();
  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!query.code || !query.state) return;
    void (async () => {
      if (query.state === localStorage.getItem("csrf")) {
        const req = await fetch(`/api/auth?code=${query.code}`);
        const res = (await req.json()) as AuthEndpointRes;
        if (res.status === 200) {
          localStorage.setItem("token", res.token);
          setIsLoggedIn(true);
        }
      }
      localStorage.removeItem("csrf");
      await push("/");
    })();
  }, [query]);

  return <div>認証しています...</div>;
};

export default Callback;
