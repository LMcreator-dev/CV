import type { HorusSubject } from "../../types";

import { M0301 } from "./M03.01";
import { M0302 } from "./M03.02";
import { M0303 } from "./M03.03";
import { M0304 } from "./M03.04";

export const M03: HorusSubject = {

  code: "M03",
  title: "RNN, LSTM y GRU",
  description: "Modelado secuencial y arquitecturas recurrentes previas a Transformers.",

  topics: [
    M0301,
    M0302,
    M0303,
    M0304,
  ],

  resources: [],

};
