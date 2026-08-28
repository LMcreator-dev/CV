import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R05.02 · Benchmarking
 ********************************************************/

export const R0502: HorusTopic = {

  code: "R05.02",
  title: "Benchmarking",

  items: [
    item("R05.02.01", "Benchmark design"),
    item("R05.02.02", "Baselines"),
    item("R05.02.03", "Metric selection"),
    item("R05.02.04", "Throughput benchmark"),
    item("R05.02.05", "Memory benchmark"),
    item("R05.02.06", "Accuracy benchmark"),
    item("R05.02.07", "Statistical comparison"),

  ],

};
