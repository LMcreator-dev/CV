import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S05.01 · Numerical precision
 ********************************************************/

export const S0501: HorusTopic = {

  code: "S05.01",
  title: "Numerical precision",

  items: [
    item("S05.01.01", "FP64"),
    item("S05.01.02", "FP32"),
    item("S05.01.03", "TF32"),
    item("S05.01.04", "FP16"),
    item("S05.01.05", "BF16"),
    item("S05.01.06", "FP8"),

  ],

};
