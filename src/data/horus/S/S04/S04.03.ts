import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S04.03 · Optimización
 ********************************************************/

export const S0403: HorusTopic = {

  code: "S04.03",
  title: "Optimización",

  items: [
    item("S04.03.01", "Paged attention"),
    item("S04.03.02", "Speculative decoding"),
    item("S04.03.03", "Prefix caching"),
    item("S04.03.04", "Quantized inference"),
    item("S04.03.05", "Memory optimization"),
    item("S04.03.06", "GPU utilization"),
    item("S04.03.07", "Model parallel inference"),

  ],

};
