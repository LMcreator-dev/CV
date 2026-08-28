import type { HorusSubject } from "../../types";

import { R0801 } from "./R08.01";
import { R0802 } from "./R08.02";
import { R0803 } from "./R08.03";
import { R0804 } from "./R08.04";

export const R08: HorusSubject = {

  code: "R08",
  title: "Benchmarking y Evaluación Científica",
  description: "Construcción y evaluación rigurosa de benchmarks y modelos.",

  topics: [
    R0801,
    R0802,
    R0803,
    R0804,
  ],

  resources: [],

};
