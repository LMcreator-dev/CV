import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M12.03 · Process supervision
 ********************************************************/

export const M1203: HorusTopic = {

  code: "M12.03",
  title: "Process supervision",

  items: [
    item("M12.03.01", "Process supervision"),
    item("M12.03.02", "Outcome supervision"),
    item("M12.03.03", "Step-level labels"),
    item("M12.03.04", "Process reward models"),
    item("M12.03.05", "Outcome reward models"),
    item("M12.03.06", "Verifier models"),
    item("M12.03.07", "Critic models"),

  ],

};
