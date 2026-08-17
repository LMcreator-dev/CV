import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/*******************************************************
 * M06.04
 * Pretraining
 *******************************************************/

export const M0604: HorusTopic = {

  code: "M06.04",
  title: "Pretraining",

  items: [
    item("M06.04.01", "Pretraining objective"),
    item("M06.04.02", "Batch size"),
    item("M06.04.03", "Sequence length"),
    item("M06.04.04", "Tokens per batch"),
    item("M06.04.05", "Learning rate"),
    item("M06.04.06", "Warmup"),
    item("M06.04.07", "Weight decay"),
    item("M06.04.08", "Gradient accumulation"),
    item("M06.04.09", "Gradient clipping"),
    item("M06.04.10", "Checkpointing"),
    item("M06.04.11", "Resume training"),
    item("M06.04.12", "Validation loss"),
    item("M06.04.13", "Perplexity"),

  ],

};
