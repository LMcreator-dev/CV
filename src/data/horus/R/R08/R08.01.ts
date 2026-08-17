import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R08.01 · Benchmark design
 ********************************************************/

export const R0801: HorusTopic = {

  code: "R08.01",
  title: "Benchmark design",

  items: [
    item("R08.01.01", "Benchmark objectives"),
    item("R08.01.02", "Task definition"),
    item("R08.01.03", "Dataset construction"),
    item("R08.01.04", "Train-test separation"),
    item("R08.01.05", "Evaluation protocol"),
    item("R08.01.06", "Baseline selection"),
    item("R08.01.07", "Metric selection"),

  ],

};
