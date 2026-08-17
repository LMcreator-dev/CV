import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G09.04
 * GPU y precisión
 ********************************************************/

export const G0904: HorusTopic = {

  code: "G09.04",

  title: "GPU y precisión",

  items: [

    item("G09.04.01", "CUDA devices"),
    item("G09.04.02", "CPU tensors"),
    item("G09.04.03", "GPU tensors"),
    item("G09.04.04", "Device placement"),
    item("G09.04.05", "CUDA memory"),
    item("G09.04.06", "Mixed precision"),
    item("G09.04.07", "AMP"),
    item("G09.04.08", "FP32"),
    item("G09.04.09", "FP16"),
    item("G09.04.10", "BF16"),
    item("G09.04.11", "Gradient scaling"),

  ],

};
