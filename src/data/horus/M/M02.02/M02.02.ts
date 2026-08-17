import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M02.02
 * Modelos estadísticos
 ********************************************************/

export const M0202: HorusTopic = {

  code: "M02.02",

  title: "Modelos estadísticos",

  items: [

    item("M02.02.01", "N-grams"),
    item("M02.02.02", "Unigram language model"),
    item("M02.02.03", "Bigram model"),
    item("M02.02.04", "Trigram model"),
    item("M02.02.05", "Smoothing"),
    item("M02.02.06", "Backoff"),
    item("M02.02.07", "Perplexity"),

  ],

};
