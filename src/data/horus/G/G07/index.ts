import type { HorusSubject } from "../../types";

import { G0701 } from "./G07.01";
import { G0702 } from "./G07.02";
import { G0703 } from "./G07.03";
import { G0704 } from "./G07.04";
import { G0705 } from "./G07.05";
import { G0706 } from "./G07.06";
import { G0707 } from "./G07.07";
import { G0708 } from "./G07.08";

export const G07: HorusSubject = {

  code: "G07",
  title: "Machine Learning",
  description: "Machine Learning clásico, teoría de aprendizaje, modelos, evaluación y preparación de datos.",

  topics: [
    G0701,
    G0702,
    G0703,
    G0704,
    G0705,
    G0706,
    G0707,
    G0708,
  ],

  resources: [],

};
