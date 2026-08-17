import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M04.02 · Tipos de atención
 ********************************************************/

export const M0402: HorusTopic = {

  code: "M04.02",
  title: "Tipos de atención",

  items: [
    item("M04.02.01", "Self-attention"),
    item("M04.02.02", "Cross-attention"),
    item("M04.02.03", "Causal attention"),
    item("M04.02.04", "Masked attention"),
    item("M04.02.05", "Padding mask"),
    item("M04.02.06", "Attention mask"),

  ],

};
