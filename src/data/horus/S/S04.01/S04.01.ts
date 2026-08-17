import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S04.01
 * Inference
 ********************************************************/

export const S0401: HorusTopic = {

  code: "S04.01",

  title: "Inference",

  items: [

    item("S04.01.01", "Forward inference"),
    item("S04.01.02", "Batch inference"),
    item("S04.01.03", "Token generation"),
    item("S04.01.04", "KV cache"),
    item("S04.01.05", "Prefill"),
    item("S04.01.06", "Decode"),
    item("S04.01.07", "Context length"),

  ],

};
