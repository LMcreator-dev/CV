import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S05.03 · Compression
 ********************************************************/

export const S0503: HorusTopic = {

  code: "S05.03",
  title: "Compression",

  items: [
    item("S05.03.01", "Pruning"),
    item("S05.03.02", "Structured pruning"),
    item("S05.03.03", "Unstructured pruning"),
    item("S05.03.04", "Sparsity"),
    item("S05.03.05", "Knowledge distillation"),
    item("S05.03.06", "Teacher-student models"),
    item("S05.03.07", "Model merging"),

  ],

};
