import type { HorusSubject } from "../../types";

import { R0101 } from "./R01.01";
import { R0102 } from "./R01.02";
import { R0103 } from "./R01.03";

export const R01: HorusSubject = {

  code: "R01",
  title: "Método científico y metodología experimental",
  description: "Diseñar experimentos reproducibles y científicamente útiles.",

  topics: [
    R0101,
    R0102,
    R0103,
  ],

  resources: [],

};
