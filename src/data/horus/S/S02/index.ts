import type { HorusSubject } from "../../types";

import { S0201 } from "./S02.01";
import { S0202 } from "./S02.02";
import { S0203 } from "./S02.03";
import { S0204 } from "./S02.04";

export const S02: HorusSubject = {

  code: "S02",
  title: "CUDA y GPU Programming",
  description: "Programación directa de GPU, kernels y memoria.",

  topics: [
    S0201,
    S0202,
    S0203,
    S0204,
  ],

  resources: [],

};
