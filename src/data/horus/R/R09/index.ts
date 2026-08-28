import type { HorusSubject } from "../../types";

import { R0901 } from "./R09.01";
import { R0902 } from "./R09.02";
import { R0903 } from "./R09.03";
import { R0904 } from "./R09.04";
import { R0905 } from "./R09.05";

export const R09: HorusSubject = {

  code: "R09",
  title: "Mechanistic Interpretability y Model Research",
  description: "Investigación del funcionamiento interno de modelos y edición de conocimiento.",

  topics: [
    R0901,
    R0902,
    R0903,
    R0904,
    R0905,
  ],

  resources: [],

};
