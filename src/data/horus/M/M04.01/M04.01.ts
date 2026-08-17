import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M04.01
 * Attention básica
 ********************************************************/

export const M0401: HorusTopic = {

  code: "M04.01",

  title: "Attention básica",

  items: [

    item("M04.01.01", "Query"),
    item("M04.01.02", "Key"),
    item("M04.01.03", "Value"),
    item("M04.01.04", "Attention scores"),
    item("M04.01.05", "Dot-product attention"),
    item("M04.01.06", "Scaled dot-product attention"),
    item("M04.01.07", "Softmax attention weights"),
    item("M04.01.08", "Weighted sum"),

  ],

};
