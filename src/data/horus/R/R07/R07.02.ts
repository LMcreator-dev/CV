import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R07.02 · Ablation studies
 ********************************************************/

export const R0702: HorusTopic = {

  code: "R07.02",
  title: "Ablation studies",

  items: [
    item("R07.02.01", "Ablation design"),
    item("R07.02.02", "Component ablation"),
    item("R07.02.03", "Hyperparameter ablation"),
    item("R07.02.04", "Data ablation"),
    item("R07.02.05", "Architecture ablation"),
    item("R07.02.06", "Training objective ablation"),
    item("R07.02.07", "Interpretation of ablations"),

  ],

};
