import type { HorusSubject } from "../../types";

import { M1101 } from "./M11.01";
import { M1102 } from "./M11.02";
import { M1103 } from "./M11.03";

export const M11: HorusSubject = {

  code: "M11",
  title: "Speech y Audio AI",
  description: "Procesamiento de señales, reconocimiento y síntesis de voz.",

  topics: [
    M1101,
    M1102,
    M1103,
  ],

  resources: [],

};
