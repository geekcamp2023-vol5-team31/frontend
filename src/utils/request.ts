import { API_ENDPOINT } from "@/env";

const request = (url: RequestInfo | URL, init?: RequestInit) => {
  return fetch(`${API_ENDPOINT}${url}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
};

export { request };
