import { API_ENDPOINT } from "@/env";

const request = async (url: RequestInfo | URL, init?: RequestInit) => {
  const csrf_req = await fetch(`${API_ENDPOINT}/myapp/csrf_token/`, {
    credentials: "include",
  });
  const csrf_res = (await csrf_req.json()) as { token: string };
  return await fetch(`${API_ENDPOINT}${url}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      "X-CSRFToken": csrf_res.token,
    },
    credentials: "include",
  });
};

export { request };
