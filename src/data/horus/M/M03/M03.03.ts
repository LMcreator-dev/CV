import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M03.03 · LSTM
 ********************************************************/

export const M0303: HorusTopic = {

  code: "M03.03",
  title: "LSTM",

  items: [
    item("M03.03.01", "Cell state"),
    item("M03.03.02", "Forget gate"),
    item("M03.03.03", "Input gate"),
    item("M03.03.04", "Output gate"),
    item("M03.03.05", "Candidate state"),
    item("M03.03.06", "Bidirectional LSTM"),

  ],

};
