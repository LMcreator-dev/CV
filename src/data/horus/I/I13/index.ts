import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I13 · LLM Pretraining
 ********************************************************/

export const I13: HorusTopic = {

  code: "I13",
  title: "LLM Pretraining",

  items: [
    item("I13.01.01", "Dataset pipeline"),
    item("I13.01.02", "Token packing"),
    item("I13.01.03", "Batching"),
    item("I13.01.04", "Optimizer"),
    item("I13.01.05", "Learning-rate schedule"),
    item("I13.01.06", "Checkpointing"),
    item("I13.01.07", "Validation"),
    item("I13.01.08", "Perplexity"),
    item("I13.01.09", "Training monitoring"),

  ],

};
