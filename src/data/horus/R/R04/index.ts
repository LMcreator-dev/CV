import type { HorusSubject } from "../../types";

import { R0401 } from "./R04.01";
import { R0402 } from "./R04.02";
import { R0403 } from "./R04.03";
import { R0404 } from "./R04.04";
import { R0405 } from "./R04.05";

export const R04: HorusSubject = {

  code: "R04",
  title: "Advanced AI Theory",
  description: "Áreas teóricas adicionales para investigación y especialización.",

  topics: [
    R0401,
    R0402,
    R0403,
    R0404,
    R0405,
  ],

  resources: [],

};
