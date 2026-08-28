import type { HorusSubject } from "../../types";

import { M0501 } from "./M05.01";
import { M0502 } from "./M05.02";
import { M0503 } from "./M05.03";
import { M0504 } from "./M05.04";

export const M05: HorusSubject = {

  code: "M05",
  title: "Transformers",
  description: "Arquitectura central de gran parte de los modelos modernos.",

  topics: [
    M0501,
    M0502,
    M0503,
    M0504,
  ],

  resources: [],

};
