import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M05.04 · Entrenamiento y generación
 ********************************************************/

export const M0504: HorusTopic = {

  code: "M05.04",
  title: "Entrenamiento y generación",

  items: [
    item("M05.04.01", "Causal language modeling"),
    item("M05.04.02", "Teacher forcing"),
    item("M05.04.03", "Next-token prediction"),
    item("M05.04.04", "Cross entropy"),
    item("M05.04.05", "Logits"),
    item("M05.04.06", "Sampling"),
    item("M05.04.07", "Temperature"),
    item("M05.04.08", "Top-k sampling"),
    item("M05.04.09", "Top-p sampling"),
    item("M05.04.10", "Greedy decoding"),
    item("M05.04.11", "Beam search"),

  ],

};
