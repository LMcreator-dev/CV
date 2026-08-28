import type { HorusSubject } from "../../types";

import { S0601 } from "./S06.01";
import { S0602 } from "./S06.02";
import { S0603 } from "./S06.03";

export const S06: HorusSubject = {

  code: "S06",
  title: "MLOps y ML Engineering",
  description: "Experimentación reproducible, pipelines y producción.",

  topics: [
    S0601,
    S0602,
    S0603,
  ],

  resources: [],

};
