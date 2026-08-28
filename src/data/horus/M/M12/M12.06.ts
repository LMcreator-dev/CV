import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M12.06 · Reasoning data
 ********************************************************/

export const M1206: HorusTopic = {

  code: "M12.06",
  title: "Reasoning data",

  items: [
    item("M12.06.01", "Reasoning datasets"),
    item("M12.06.02", "Synthetic reasoning data"),
    item("M12.06.03", "Solution generation"),
    item("M12.06.04", "Solution filtering"),
    item("M12.06.05", "Verifier filtering"),
    item("M12.06.06", "Difficulty scaling"),
    item("M12.06.07", "Curriculum learning"),
    item("M12.06.08", "Data contamination"),

  ],

};
