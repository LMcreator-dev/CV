import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M02.01 · Procesamiento de texto
 ********************************************************/

export const M0201: HorusTopic = {

  code: "M02.01",
  title: "Procesamiento de texto",

  items: [
    item("M02.01.01", "Text normalization"),
    item("M02.01.02", "Word tokenization"),
    item("M02.01.03", "Character tokenization"),
    item("M02.01.04", "Sentence splitting"),
    item("M02.01.05", "Stopwords"),
    item("M02.01.06", "Stemming"),
    item("M02.01.07", "Lemmatization"),
    item("M02.01.08", "Subword tokenization"),

  ],

};
