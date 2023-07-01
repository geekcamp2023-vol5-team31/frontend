import { createContext } from "react";

type context = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

export const AuthContext = createContext<context>({
  isLoggedIn: false,
  setIsLoggedIn: () => undefined,
});
