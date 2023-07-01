export type AuthEndpointRes =
  | {
      status: 200;
      token: string;
    }
  | {
      status: 400;
      message: string;
    };
