import type { HorusSubject } from "../../types";

import { G0501 } from "./G05.01";
import { G0502 } from "./G05.02";
import { G0503 } from "./G05.03";
import { G0504 } from "./G05.04";
import { G0505 } from "./G05.05";
import { G0506 } from "./G05.06";

export const G05: HorusSubject = {

  code: "G05",
  title: "Probabilidad y Estadística",
  description: "Probabilidad, inferencia, distribuciones, estadística e información.",

  topics: [
    G0501,
    G0502,
    G0503,
    G0504,
    G0505,
    G0506,
  ],

  resources: [],

};
