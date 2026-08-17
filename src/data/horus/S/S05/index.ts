import type { HorusSubject } from "../../types";

import { S0501 } from "./S05.01";
import { S0502 } from "./S05.02";
import { S0503 } from "./S05.03";
import { S0504 } from "./S05.04";

export const S05: HorusSubject = {

  code: "S05",
  title: "Quantization, Compression y Optimization",
  description: "Reducción de memoria, coste y tiempo de ejecución.",

  topics: [
    S0501,
    S0502,
    S0503,
    S0504,
  ],

  resources: [],

};
