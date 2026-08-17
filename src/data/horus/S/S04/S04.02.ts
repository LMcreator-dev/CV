import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S04.02 · Serving
 ********************************************************/

export const S0402: HorusTopic = {

  code: "S04.02",
  title: "Serving",

  items: [
    item("S04.02.01", "Model server"),
    item("S04.02.02", "Request batching"),
    item("S04.02.03", "Continuous batching"),
    item("S04.02.04", "Scheduling"),
    item("S04.02.05", "Throughput"),
    item("S04.02.06", "Latency"),
    item("S04.02.07", "Time to first token"),
    item("S04.02.08", "Tokens per second"),

  ],

};
