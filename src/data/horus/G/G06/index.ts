import type { HorusSubject } from "../../types";

import { G0601 } from "./G06.01";
import { G0602 } from "./G06.02";
import { G0603 } from "./G06.03";
import { G0604 } from "./G06.04";
import { G0605 } from "./G06.05";

export const G06: HorusSubject = {

  code: "G06",
  title: "Algoritmos y Estructuras de Datos",
  description: "Complejidad, estructuras de datos, grafos y algoritmos fundamentales.",

  topics: [
    G0601,
    G0602,
    G0603,
    G0604,
    G0605,
  ],

  resources: [],

};
