import type { HorusSubject } from "../../types";

import { M0101 } from "./M01.01";
import { M0102 } from "./M01.02";
import { M0103 } from "./M01.03";
import { M0104 } from "./M01.04";
import { M0105 } from "./M01.05";

export const M01: HorusSubject = {

  code: "M01",
  title: "Computer Vision",
  description: "Visión por computador desde convoluciones hasta Vision Transformers y modelos visuales.",

  topics: [
    M0101,
    M0102,
    M0103,
    M0104,
    M0105,
  ],

  resources: [],

};
