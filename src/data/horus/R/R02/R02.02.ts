import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R02.02 · Evaluación crítica
 ********************************************************/

export const R0202: HorusTopic = {

  code: "R02.02",
  title: "Evaluación crítica",

  items: [
    item("R02.02.01", "Claim"),
    item("R02.02.02", "Evidence"),
    item("R02.02.03", "Baseline quality"),
    item("R02.02.04", "Dataset quality"),
    item("R02.02.05", "Evaluation metrics"),
    item("R02.02.06", "Statistical validity"),
    item("R02.02.07", "Reproducibility"),
    item("R02.02.08", "Limitations"),
    item("R02.02.09", "Possible confounders"),

  ],

};
