import type { HorusStage } from "../types";

import { R01 } from "./R01";
import { R02 } from "./R02";
import { R03 } from "./R03";
import { R04 } from "./R04";
import { R05 } from "./R05";
import { R06 } from "./R06";

export const R: HorusStage = {
  code: "R",
  title: "Research",
  subtitle: "Método científico, papers, reproducción e investigación propia",
  description: "Del aprendizaje y reproducción experimental hasta investigación original.",
  subjects: [
    R01,
    R02,
    R03,
    R04,
    R05,
    R06,
  ],
};
