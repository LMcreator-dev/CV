import type { HorusStage } from "../types";

import { S01 } from "./S01";
import { S02 } from "./S02";
import { S03 } from "./S03";
import { S04 } from "./S04";
import { S05 } from "./S05";
import { S06 } from "./S06";
import { S07 } from "./S07";
import { S08 } from "./S08";

export const S: HorusStage = {
  code: "S",
  title: "Especialización",
  subtitle: "AI Systems, GPU, eficiencia, seguridad e interpretabilidad",
  description: "Entrenamiento, inferencia, optimización, seguridad y análisis interno de modelos.",
  subjects: [
    S01,
    S02,
    S03,
    S04,
    S05,
    S06,
    S07,
    S08,
  ],
};
