import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R08.04 · LLM evaluation
 ********************************************************/

export const R0804: HorusTopic = {

  code: "R08.04",
  title: "LLM evaluation",

  items: [
    item("R08.04.01", "Knowledge benchmarks"),
    item("R08.04.02", "Reasoning benchmarks"),
    item("R08.04.03", "Coding benchmarks"),
    item("R08.04.04", "Long-context benchmarks"),
    item("R08.04.05", "Multilingual benchmarks"),
    item("R08.04.06", "Safety benchmarks"),
    item("R08.04.07", "Factuality benchmarks"),
    item("R08.04.08", "Hallucination evaluation"),
    item("R08.04.09", "Tool-use evaluation"),

  ],

};
