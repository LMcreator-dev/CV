import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M13.02 · Embedding models
 ********************************************************/

export const M1302: HorusTopic = {

  code: "M13.02",
  title: "Embedding models",

  items: [
    item("M13.02.01", "Text embeddings"),
    item("M13.02.02", "Sentence embeddings"),
    item("M13.02.03", "Bi-encoder"),
    item("M13.02.04", "Dual encoder"),
    item("M13.02.05", "Contrastive embedding training"),
    item("M13.02.06", "Hard negatives"),
    item("M13.02.07", "Embedding normalization"),
    item("M13.02.08", "Embedding evaluation"),

  ],

};
