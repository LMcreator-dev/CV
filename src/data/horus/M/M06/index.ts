import type { HorusSubject } from "../../types";

import { M0601 } from "./M06.01";
import { M0602 } from "./M06.02";
import { M0603 } from "./M06.03";
import { M0604 } from "./M06.04";
import { M0605 } from "./M06.05";
import { M0606 } from "./M06.06";
import { M0607 } from "./M06.07";
import { M0608 } from "./M06.08";

export const M06: HorusSubject = {

  code: "M06",
  title: "Large Language Models",
  description: "Tokenización, datos, pretraining, scaling, arquitectura, inferencia y evaluación.",

  topics: [
    M0601,
    M0602,
    M0603,
    M0604,
    M0605,
    M0606,
    M0607,
    M0608,
  ],

  resources: [],

};
