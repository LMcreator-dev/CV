import type { HorusSubject } from "../../types";

import { G0301 } from "./G03.01";
import { G0302 } from "./G03.02";
import { G0303 } from "./G03.03";
import { G0304 } from "./G03.04";
import { G0305 } from "./G03.05";
import { G0306 } from "./G03.06";
import { G0307 } from "./G03.07";

export const G03: HorusSubject = {

  code: "G03",
  title: "Álgebra Lineal",
  description: "Vectores, matrices, espacios vectoriales, transformaciones, eigenvalues y descomposiciones.",

  topics: [
    G0301,
    G0302,
    G0303,
    G0304,
    G0305,
    G0306,
    G0307,
  ],

  resources: [],

};
