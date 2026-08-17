import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I14.01 · Fine-tuning
 ********************************************************/

export const I1401: HorusTopic = {

  code: "I14.01",
  title: "Fine-tuning",

  items: [
    item("I14.01.01", "Supervised fine-tuning"),
    item("I14.01.02", "Instruction dataset"),
    item("I14.01.03", "Chat template"),
    item("I14.01.04", "LoRA"),
    item("I14.01.05", "QLoRA"),
    item("I14.01.06", "Evaluation"),
    item("I14.01.07", "Checkpoint merging"),

  ],

};
