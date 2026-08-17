import type { HorusSubject } from "../../types";

import { R0601 } from "./R06.01";
import { R0602 } from "./R06.02";
import { R0603 } from "./R06.03";

export const R06: HorusSubject = {

  code: "R06",
  title: "Investigación original y publicación",
  description: "Investigación propia, escritura técnica y publicación.",

  topics: [
    R0601,
    R0602,
    R0603,
  ],

  resources: [],

};
