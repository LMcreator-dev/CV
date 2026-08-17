import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M04.03 · Multi-head attention
 ********************************************************/

export const M0403: HorusTopic = {

  code: "M04.03",
  title: "Multi-head attention",

  items: [
    item("M04.03.01", "Head"),
    item("M04.03.02", "Q projection"),
    item("M04.03.03", "K projection"),
    item("M04.03.04", "V projection"),
    item("M04.03.05", "Head splitting"),
    item("M04.03.06", "Head concatenation"),
    item("M04.03.07", "Output projection"),
    item("M04.03.08", "Attention complexity"),

  ],

};
