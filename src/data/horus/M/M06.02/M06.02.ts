import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/*******************************************************
 * M06.02
 * Tokenización
 *******************************************************/

export const M0602: HorusTopic = {

  code: "M06.02",
  title: "Tokenización",

  items: [
    item("M06.02.01", "Character tokenization"),
    item("M06.02.02", "Word tokenization"),
    item("M06.02.03", "Subword tokenization"),
    item("M06.02.04", "Byte-level tokenization"),
    item("M06.02.05", "BPE"),
    item("M06.02.06", "WordPiece"),
    item("M06.02.07", "Unigram"),
    item("M06.02.08", "SentencePiece"),
    item("M06.02.09", "Vocabulary size"),
    item("M06.02.10", "Special tokens"),
    item("M06.02.11", "BOS"),
    item("M06.02.12", "EOS"),
    item("M06.02.13", "PAD"),
    item("M06.02.14", "UNK"),

  ],

};
