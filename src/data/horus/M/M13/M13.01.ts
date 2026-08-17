import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M13.01 · Information Retrieval
 ********************************************************/

export const M1301: HorusTopic = {

  code: "M13.01",
  title: "Information Retrieval",

  items: [
    item("M13.01.01", "Information retrieval"),
    item("M13.01.02", "Inverted index"),
    item("M13.01.03", "TF-IDF"),
    item("M13.01.04", "BM25"),
    item("M13.01.05", "Sparse retrieval"),
    item("M13.01.06", "Dense retrieval"),
    item("M13.01.07", "Query representation"),
    item("M13.01.08", "Document representation"),
    item("M13.01.09", "Recall@k"),

  ],

};
