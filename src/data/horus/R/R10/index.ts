import type { HorusSubject } from "../../types";

import { R1001 } from "./R10.01";
import { R1002 } from "./R10.02";
import { R1003 } from "./R10.03";
import { R1004 } from "./R10.04";

export const R10: HorusSubject = {

  code: "R10",
  title: "Research Communication y Publication",
  description: "Escritura, comunicación científica y publicación de investigación.",

  topics: [
    R1001,
    R1002,
    R1003,
    R1004,
  ],

  resources: [],

};
