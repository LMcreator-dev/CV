import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M05.03
 * Bloques modernos
 ********************************************************/

export const M0503: HorusTopic = {

  code: "M05.03",

  title: "Bloques modernos",

  items: [

    item("M05.03.01", "Pre-norm Transformer"),
    item("M05.03.02", "Post-norm Transformer"),
    item("M05.03.03", "RMSNorm"),
    item("M05.03.04", "GELU"),
    item("M05.03.05", "SwiGLU"),
    item("M05.03.06", "Gated MLP"),
    item("M05.03.07", "Residual stream"),

  ],

};
