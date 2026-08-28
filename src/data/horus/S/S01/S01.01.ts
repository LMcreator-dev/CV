import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S01.01 · CPU
 ********************************************************/

export const S0101: HorusTopic = {

  code: "S01.01",
  title: "CPU",

  items: [
    item("S01.01.01", "CPU architecture"),
    item("S01.01.02", "Registers"),
    item("S01.01.03", "Cache L1"),
    item("S01.01.04", "Cache L2"),
    item("S01.01.05", "Cache L3"),
    item("S01.01.06", "RAM"),
    item("S01.01.07", "Memory bandwidth"),
    item("S01.01.08", "SIMD"),
    item("S01.01.09", "Vectorization"),
    item("S01.01.10", "Branch prediction"),

  ],

};
