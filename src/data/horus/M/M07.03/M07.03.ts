import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M07.03
 * Preference alignment
 ********************************************************/

export const M0703: HorusTopic = {

  code: "M07.03",

  title: "Preference alignment",

  items: [

    item("M07.03.01", "Preference datasets"),
    item("M07.03.02", "Reward models"),
    item("M07.03.03", "RLHF"),
    item("M07.03.04", "PPO"),
    item("M07.03.05", "DPO"),
    item("M07.03.06", "Preference optimization"),
    item("M07.03.07", "Rejection sampling"),
    item("M07.03.08", "Constitutional methods"),

  ],

};
