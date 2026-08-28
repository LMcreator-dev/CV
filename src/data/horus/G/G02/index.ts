import type { HorusSubject } from "../../types";

import { G0201 } from "./G02.01";
import { G0202 } from "./G02.02";
import { G0203 } from "./G02.03";
import { G0204 } from "./G02.04";
import { G0205 } from "./G02.05";
import { G0206 } from "./G02.06";

export const G02: HorusSubject = {

  code: "G02",
  title: "Computer Science, Sistemas y Herramientas",
  description: "Sistemas operativos, Linux, Git, redes, bases de datos y contenedores.",

  topics: [
    G0201,
    G0202,
    G0203,
    G0204,
    G0205,
    G0206,
  ],

  resources: [],

};
