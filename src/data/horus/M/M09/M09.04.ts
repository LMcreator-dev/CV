import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M09.04 · Policy-based RL
 ********************************************************/

export const M0904: HorusTopic = {

  code: "M09.04",
  title: "Policy-based RL",

  items: [
    item("M09.04.01", "Policy gradient"),
    item("M09.04.02", "REINFORCE"),
    item("M09.04.03", "Actor-critic"),
    item("M09.04.04", "Advantage function"),
    item("M09.04.05", "A2C"),
    item("M09.04.06", "A3C"),
    item("M09.04.07", "PPO"),

  ],

};
