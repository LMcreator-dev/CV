import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I09.01 · Attention from scratch
 ********************************************************/

export const I0901: HorusTopic = {

  code: "I09.01",
  title: "Attention from scratch",

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
