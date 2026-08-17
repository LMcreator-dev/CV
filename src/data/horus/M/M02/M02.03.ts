import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M02.03 · Embeddings
 ********************************************************/

export const M0203: HorusTopic = {

  code: "M02.03",
  title: "Embeddings",

  items: [
    item("M02.03.01", "One-hot representation"),
    item("M02.03.02", "Dense embeddings"),
    item("M02.03.03", "Word2Vec"),
    item("M02.03.04", "CBOW"),
    item("M02.03.05", "Skip-gram"),
    item("M02.03.06", "Negative sampling"),
    item("M02.03.07", "GloVe"),
    item("M02.03.08", "Contextual representations"),

  ],

};
