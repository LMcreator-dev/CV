import type { HorusStage } from "../types";

import { G01 } from "./G01";
import { G02 } from "./G02";
import { G03 } from "./G03";
import { G04 } from "./G04";
import { G05 } from "./G05";
import { G06 } from "./G06";
import { G07 } from "./G07";
import { G08 } from "./G08";
import { G09 } from "./G09";

export const G: HorusStage = {
  code: "G",
  title: "Grado",
  subtitle: "Fundamentos de Computer Science e Inteligencia Artificial",
  description: "Programación, sistemas, matemáticas, estadística, algoritmos, Machine Learning y Deep Learning.",
  subjects: [
    G01,
    G02,
    G03,
    G04,
    G05,
    G06,
    G07,
    G08,
    G09,
  ],
};
