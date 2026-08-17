import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M05.02 · Positional information
 ********************************************************/

export const M0502: HorusTopic = {

  code: "M05.02",
  title: "Positional information",

  items: [
    item("M05.02.01", "Positional encoding"),
    item("M05.02.02", "Sinusoidal positional encoding"),
    item("M05.02.03", "Learned positional embeddings"),
    item("M05.02.04", "Relative position"),
    item("M05.02.05", "Rotary positional embeddings"),
    item("M05.02.06", "RoPE"),
    item("M05.02.07", "RoPE scaling"),
    item("M05.02.08", "ALiBi"),

  ],

};
