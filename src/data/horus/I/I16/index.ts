import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I16 · Quantization
 ********************************************************/

export const I16: HorusTopic = {

  code: "I16",
  title: "Quantization",

  items: [
    item("I16.01.01", "Weight quantization"),
    item("I16.01.02", "Activation quantization"),
    item("I16.01.03", "Calibration"),
    item("I16.01.04", "INT8"),
    item("I16.01.05", "INT4"),
    item("I16.01.06", "Post-training quantization"),
    item("I16.01.07", "Quantization error"),
    item("I16.01.08", "Benchmarking"),

  ],

};
