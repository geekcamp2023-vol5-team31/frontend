import { TMember } from "@/@types/member";

export type TEvent = {
  total: number;
  data: TMember[];
  event_name: string;
  event_id: number;
};
