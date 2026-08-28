import type { HorusSubject } from "../../types";

import { M0901 } from "./M09.01";
import { M0902 } from "./M09.02";
import { M0903 } from "./M09.03";
import { M0904 } from "./M09.04";
import { M0905 } from "./M09.05";

export const M09: HorusSubject = {

  code: "M09",
  title: "Reinforcement Learning",
  description: "Aprendizaje mediante interacción, recompensas, valores y políticas.",

  topics: [
    M0901,
    M0902,
    M0903,
    M0904,
    M0905,
  ],

  resources: [],

};
