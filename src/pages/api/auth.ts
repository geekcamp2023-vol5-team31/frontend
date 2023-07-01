import { NextApiRequest, NextApiResponse } from "next";

import { AuthEndpointRes } from "@/@types/AuthEndpoint";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "@/env";

const auth = async (
  req: NextApiRequest,
  res: NextApiResponse<AuthEndpointRes>
) => {
  const code = req.query.code;
  if (typeof code !== "string") {
    res.status(400).json({ status: 400, message: "invalid code" });
    return;
  }
  const body = new FormData();
  body.append("client_id", GITHUB_CLIENT_ID);
  body.append("client_secret", GITHUB_CLIENT_SECRET);
  body.append("code", code);
  const response = await fetch(`https://github.com/login/oauth/access_token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body,
  });
  const data = await response.text();
  const json = JSON.parse(data) as unknown as {
    access_token: string | undefined;
  };
  if (typeof json.access_token !== "string") {
    res.status(400).json({ status: 400, message: "invalid token" });
    return;
  }
  res.status(200).json({ status: 200, token: json.access_token });
};

export default auth;
