import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R08.03 · Scientific benchmarking
 ********************************************************/

export const R0803: HorusTopic = {

  code: "R08.03",
  title: "Scientific benchmarking",

  items: [
    item("R08.03.01", "Benchmark leakage"),
    item("R08.03.02", "Data contamination"),
    item("R08.03.03", "Benchmark saturation"),
    item("R08.03.04", "Distribution shift"),
    item("R08.03.05", "Out-of-distribution evaluation"),
    item("R08.03.06", "Robustness evaluation"),
    item("R08.03.07", "Confidence intervals"),
    item("R08.03.08", "Statistical comparisons"),

  ],

};
