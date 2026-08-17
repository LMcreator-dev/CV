import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M07.01
 * Adaptación
 ********************************************************/

export const M0701: HorusTopic = {

  code: "M07.01",

  title: "Adaptación",

  items: [

    item("M07.01.01", "Continued pretraining"),
    item("M07.01.02", "Domain adaptation"),
    item("M07.01.03", "Supervised fine-tuning"),
    item("M07.01.04", "Instruction tuning"),
    item("M07.01.05", "Chat templates"),
    item("M07.01.06", "Training data formatting"),
    item("M07.01.07", "Data quality"),
    item("M07.01.08", "Catastrophic forgetting"),

  ],

};
