import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M10.02
 * Vision-Language
 ********************************************************/

export const M1002: HorusTopic = {

  code: "M10.02",

  title: "Vision-Language",

  items: [

    item("M10.02.01", "CLIP"),
    item("M10.02.02", "Image encoder"),
    item("M10.02.03", "Text encoder"),
    item("M10.02.04", "Contrastive loss"),
    item("M10.02.05", "Visual instruction tuning"),
    item("M10.02.06", "Vision-language models"),
    item("M10.02.07", "Image tokens"),
    item("M10.02.08", "Vision-language connector"),

  ],

};
