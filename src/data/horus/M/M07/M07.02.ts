import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M07.02 · Parameter-efficient fine-tuning
 ********************************************************/

export const M0702: HorusTopic = {

  code: "M07.02",
  title: "Parameter-efficient fine-tuning",

  items: [
    item("M07.02.01", "Adapters"),
    item("M07.02.02", "LoRA"),
    item("M07.02.03", "Low-rank decomposition"),
    item("M07.02.04", "QLoRA"),
    item("M07.02.05", "Rank selection"),
    item("M07.02.06", "Target modules"),
    item("M07.02.07", "Merge adapters"),

  ],

};
