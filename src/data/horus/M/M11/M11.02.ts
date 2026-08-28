import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M11.02 · Speech recognition
 ********************************************************/

export const M1102: HorusTopic = {

  code: "M11.02",
  title: "Speech recognition",

  items: [
    item("M11.02.01", "ASR"),
    item("M11.02.02", "CTC"),
    item("M11.02.03", "Connectionist Temporal Classification"),
    item("M11.02.04", "wav2vec"),
    item("M11.02.05", "Self-supervised speech"),
    item("M11.02.06", "Whisper"),

  ],

};
