import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R08.02 · Model evaluation
 ********************************************************/

export const R0802: HorusTopic = {

  code: "R08.02",
  title: "Model evaluation",

  items: [
    item("R08.02.01", "Accuracy evaluation"),
    item("R08.02.02", "Generative evaluation"),
    item("R08.02.03", "Human evaluation"),
    item("R08.02.04", "Pairwise evaluation"),
    item("R08.02.05", "LLM-as-a-judge"),
    item("R08.02.06", "Judge bias"),
    item("R08.02.07", "Inter-rater agreement"),
    item("R08.02.08", "Evaluation reproducibility"),

  ],

};
