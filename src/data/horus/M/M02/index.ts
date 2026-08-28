import type { HorusSubject } from "../../types";

import { M0201 } from "./M02.01";
import { M0202 } from "./M02.02";
import { M0203 } from "./M02.03";
import { M0204 } from "./M02.04";

export const M02: HorusSubject = {

  code: "M02",
  title: "NLP clásico y representación del lenguaje",
  description: "Procesamiento de texto, modelos estadísticos, embeddings y tareas NLP.",

  topics: [
    M0201,
    M0202,
    M0203,
    M0204,
  ],

  resources: [],

};
