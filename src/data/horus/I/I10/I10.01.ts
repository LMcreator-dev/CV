import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I10.01 · Transformer from scratch
 ********************************************************/

export const I1001: HorusTopic = {

  code: "I10.01",
  title: "Transformer from scratch",

  items: [
    item("I10.01.01", "Multi-head attention"),
    item("I10.01.02", "Feed-forward block"),
    item("I10.01.03", "Residual connection"),
    item("I10.01.04", "Layer normalization"),
    item("I10.01.05", "Positional representation"),
    item("I10.01.06", "Transformer block"),
    item("I10.01.07", "Causal masking"),

  ],

};
