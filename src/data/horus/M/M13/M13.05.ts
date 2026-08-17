import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M13.05 · Tool use
 ********************************************************/

export const M1305: HorusTopic = {

  code: "M13.05",
  title: "Tool use",

  items: [
    item("M13.05.01", "Tool calling"),
    item("M13.05.02", "Function calling"),
    item("M13.05.03", "Tool schemas"),
    item("M13.05.04", "Tool selection"),
    item("M13.05.05", "Tool execution"),
    item("M13.05.06", "Tool result handling"),
    item("M13.05.07", "Tool errors"),
    item("M13.05.08", "Tool security"),

  ],

};
