import type { HorusStage } from "../types";

import { M01 } from "./M01";
import { M02 } from "./M02";
import { M03 } from "./M03";
import { M04 } from "./M04";
import { M05 } from "./M05";
import { M06 } from "./M06";
import { M07 } from "./M07";
import { M08 } from "./M08";
import { M09 } from "./M09";
import { M10 } from "./M10";
import { M11 } from "./M11";

export const M: HorusStage = {
  code: "M",
  title: "Máster",
  subtitle: "Deep Learning, modelos generativos y modelos fundacionales",
  description: "Computer Vision, NLP, secuencias, attention, Transformers, LLMs, generative AI, reinforcement learning y multimodalidad.",
  subjects: [
    M01,
    M02,
    M03,
    M04,
    M05,
    M06,
    M07,
    M08,
    M09,
    M10,
    M11,
  ],
};
