import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I09 · Attention desde cero
 ********************************************************/

export const I09: HorusTopic = {

  code: "I09",
  title: "Attention desde cero",

  items: [
    item("I09.01.01", "Query"),
    item("I09.01.02", "Key"),
    item("I09.01.03", "Value"),
    item("I09.01.04", "Attention scores"),
    item("I09.01.05", "Scaled dot-product"),
    item("I09.01.06", "Masking"),
    item("I09.01.07", "Attention weights"),

  ],

};
