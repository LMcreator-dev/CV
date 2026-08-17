import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M13.07 · Agent evaluation
 ********************************************************/

export const M1307: HorusTopic = {

  code: "M13.07",
  title: "Agent evaluation",

  items: [
    item("M13.07.01", "Agent benchmarks"),
    item("M13.07.02", "Task success"),
    item("M13.07.03", "Trajectory evaluation"),
    item("M13.07.04", "Tool-use accuracy"),
    item("M13.07.05", "Planning accuracy"),
    item("M13.07.06", "Failure analysis"),
    item("M13.07.07", "Agent safety"),
    item("M13.07.08", "Agent robustness"),

  ],

};
