import type { HorusSubject } from "../../types";

import { M1201 } from "./M12.01";
import { M1202 } from "./M12.02";
import { M1203 } from "./M12.03";
import { M1204 } from "./M12.04";
import { M1205 } from "./M12.05";
import { M1206 } from "./M12.06";
import { M1207 } from "./M12.07";

export const M12: HorusSubject = {

  code: "M12",
  title: "Reasoning Models",
  description: "Modelos especializados en razonamiento, supervisión de procesos y escalado de cómputo en inferencia.",

  topics: [
    M1201,
    M1202,
    M1203,
    M1204,
    M1205,
    M1206,
    M1207,
  ],

  resources: [],

};
