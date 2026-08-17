import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S05.02
 * Quantization
 ********************************************************/

export const S0502: HorusTopic = {

  code: "S05.02",

  title: "Quantization",

  items: [

    item("S05.02.01", "Quantization basics"),
    item("S05.02.02", "Symmetric quantization"),
    item("S05.02.03", "Asymmetric quantization"),
    item("S05.02.04", "Calibration"),
    item("S05.02.05", "Post-training quantization"),
    item("S05.02.06", "Quantization-aware training"),
    item("S05.02.07", "INT8"),
    item("S05.02.08", "INT4"),
    item("S05.02.09", "GPTQ"),
    item("S05.02.10", "AWQ"),
    item("S05.02.11", "GGUF"),

  ],

};
