import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M09.03
 * Value-based RL
 ********************************************************/

export const M0903: HorusTopic = {

  code: "M09.03",

  title: "Value-based RL",

  items: [

    item("M09.03.01", "Monte Carlo"),
    item("M09.03.02", "Temporal difference"),
    item("M09.03.03", "Q-learning"),
    item("M09.03.04", "SARSA"),
    item("M09.03.05", "DQN"),
    item("M09.03.06", "Experience replay"),
    item("M09.03.07", "Target network"),
    item("M09.03.08", "Double DQN"),

  ],

};
