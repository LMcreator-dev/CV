import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M06.05 · Scaling
 ********************************************************/

export const M0605: HorusTopic = {

  code: "M06.05",
  title: "Scaling",

  items: [
    item("M06.05.01", "Parameter count"),
    item("M06.05.02", "Training compute"),
    item("M06.05.03", "Dataset size"),
    item("M06.05.04", "Compute-optimal training"),
    item("M06.05.05", "Scaling laws"),
    item("M06.05.06", "Chinchilla scaling"),
    item("M06.05.07", "Loss scaling"),
    item("M06.05.08", "Emergent capabilities"),

  ],

};
