import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M03.01 · RNN
 ********************************************************/

export const M0301: HorusTopic = {

  code: "M03.01",
  title: "RNN",

  items: [
    item("M03.01.01", "Sequence modeling"),
    item("M03.01.02", "Hidden state"),
    item("M03.01.03", "Recurrent connection"),
    item("M03.01.04", "Unrolling"),
    item("M03.01.05", "Teacher forcing"),
    item("M03.01.06", "Many-to-one"),
    item("M03.01.07", "One-to-many"),
    item("M03.01.08", "Many-to-many"),

  ],

};
