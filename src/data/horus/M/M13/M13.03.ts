import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M13.03 · Reranking
 ********************************************************/

export const M1303: HorusTopic = {

  code: "M13.03",
  title: "Reranking",

  items: [
    item("M13.03.01", "Cross-encoder"),
    item("M13.03.02", "Reranker"),
    item("M13.03.03", "Pairwise ranking"),
    item("M13.03.04", "Listwise ranking"),
    item("M13.03.05", "Candidate generation"),
    item("M13.03.06", "Retrieval cascade"),
    item("M13.03.07", "NDCG"),
    item("M13.03.08", "MRR"),

  ],

};
