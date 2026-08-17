import type { HorusSubject } from "../../types";

import { G0401 } from "./G04.01";
import { G0402 } from "./G04.02";
import { G0403 } from "./G04.03";
import { G0404 } from "./G04.04";
import { G0405 } from "./G04.05";

export const G04: HorusSubject = {

  code: "G04",
  title: "Cálculo y Optimización",
  description: "Cálculo diferencial, multivariable, optimización y métodos numéricos.",

  topics: [
    G0401,
    G0402,
    G0403,
    G0404,
    G0405,
  ],

  resources: [],

};
