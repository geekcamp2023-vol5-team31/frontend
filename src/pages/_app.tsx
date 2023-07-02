import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Head } from "next/document";
import { useEffect, useState } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AuthContext } from "@/context/auth";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    void (async () => {
      const req = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = (await req.json()) as { message: string };
      if (res.message === "Bad credentials") {
        localStorage.removeItem("token");
        return;
      }
      setIsLoggedIn(true);
    })();
  }, []);
  return (
    <>
      <Head>
        <title>わりかんじ</title>
      </Head>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthContext.Provider>
    </>
  );
}
