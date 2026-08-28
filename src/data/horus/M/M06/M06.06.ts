import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M06.06 · Arquitecturas LLM modernas
 ********************************************************/

export const M0606: HorusTopic = {

  code: "M06.06",
  title: "Arquitecturas LLM modernas",

  items: [
    item("M06.06.01", "GPT-style models"),
    item("M06.06.02", "BERT-style models"),
    item("M06.06.03", "T5"),
    item("M06.06.04", "Decoder-only models"),
    item("M06.06.05", "Encoder-only models"),
    item("M06.06.06", "Encoder-decoder models"),
    item("M06.06.07", "Grouped-query attention"),
    item("M06.06.08", "Multi-query attention"),
    item("M06.06.09", "Sliding-window attention"),
    item("M06.06.10", "Mixture of Experts"),
    item("M06.06.11", "Sparse MoE"),
    item("M06.06.12", "Router"),
    item("M06.06.13", "Expert load balancing"),

  ],

};
