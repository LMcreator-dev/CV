import type { HorusSubject } from "../../types";

import { M1001 } from "./M10.01";
import { M1002 } from "./M10.02";
import { M1003 } from "./M10.03";

export const M10: HorusSubject = {

  code: "M10",
  title: "Multimodal AI",
  description: "Integración de texto, imagen, audio y vídeo.",

  topics: [
    M1001,
    M1002,
    M1003,
  ],

  resources: [],

};
