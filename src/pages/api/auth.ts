import { NextApiRequest, NextApiResponse } from "next";

import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "@/env";

type Res = {
  token: string;
};

const auth = async (req: NextApiRequest, res: NextApiResponse<Res>) => {
  const code = req.query.code;
  if (typeof code !== "string") throw new Error("invalid params");
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
  const json = JSON.parse(data) as unknown as { access_token: string };
  res.status(200).json({ token: json.access_token });
};

export default auth;
