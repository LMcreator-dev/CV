import type { HorusSubject } from "../../types";

import { M0701 } from "./M07.01";
import { M0702 } from "./M07.02";
import { M0703 } from "./M07.03";

export const M07: HorusSubject = {

  code: "M07",
  title: "Fine-Tuning, Instruction Tuning y Alignment",
  description: "Adaptación y alineamiento de modelos previamente entrenados.",

  topics: [
    M0701,
    M0702,
    M0703,
  ],

  resources: [],

};
