import type { HorusSubject } from "../../types";

import { S0301 } from "./S03.01";
import { S0302 } from "./S03.02";
import { S0303 } from "./S03.03";

export const S03: HorusSubject = {

  code: "S03",
  title: "Distributed Training",
  description: "Entrenamiento distribuido y paralelismo.",

  topics: [
    S0301,
    S0302,
    S0303,
  ],

  resources: [],

};
