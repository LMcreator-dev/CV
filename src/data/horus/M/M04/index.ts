import type { HorusSubject } from "../../types";

import { M0401 } from "./M04.01";
import { M0402 } from "./M04.02";
import { M0403 } from "./M04.03";

export const M04: HorusSubject = {

  code: "M04",
  title: "Attention",
  description: "Mecanismo fundamental de atención utilizado por Transformers.",

  topics: [
    M0401,
    M0402,
    M0403,
  ],

  resources: [],

};
