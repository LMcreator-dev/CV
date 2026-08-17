import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G05.05
 * Información
 ********************************************************/

export const G0505: HorusTopic = {

  code: "G05.05",
  title: "Información",

  items: [
    item("G05.05.01", "Entropía"),
    item("G05.05.02", "Entropía conjunta"),
    item("G05.05.03", "Entropía condicional"),
    item("G05.05.04", "KL divergence"),
    item("G05.05.05", "Jensen-Shannon divergence"),
    item("G05.05.06", "Mutual information"),
    item("G05.05.07", "Cross entropy"),
    item("G05.05.08", "Perplexity"),

  ],

};
