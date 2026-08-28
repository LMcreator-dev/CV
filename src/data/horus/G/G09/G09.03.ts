import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G09.03
 * Training
 ********************************************************/

export const G0903: HorusTopic = {

  code: "G09.03",
  title: "Training",

  items: [
    item("G09.03.01", "Dataset"),
    item("G09.03.02", "DataLoader"),
    item("G09.03.03", "Batch"),
    item("G09.03.04", "Optimizer"),
    item("G09.03.05", "Loss"),
    item("G09.03.06", "Training loop"),
    item("G09.03.07", "Validation loop"),
    item("G09.03.08", "Evaluation mode"),
    item("G09.03.09", "Checkpoints"),
    item("G09.03.10", "Resume training"),

  ],

};
