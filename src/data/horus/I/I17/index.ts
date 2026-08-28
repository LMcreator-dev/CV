import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I17 · Inference Engine
 ********************************************************/

export const I17: HorusTopic = {

  code: "I17",
  title: "Inference Engine",

  items: [
    item("I17.01.01", "Model loading"),
    item("I17.01.02", "Tokenization"),
    item("I17.01.03", "Prefill"),
    item("I17.01.04", "Decode loop"),
    item("I17.01.05", "KV cache"),
    item("I17.01.06", "Sampling"),
    item("I17.01.07", "Batching"),
    item("I17.01.08", "Memory management"),
    item("I17.01.09", "Throughput benchmark"),

  ],

};
