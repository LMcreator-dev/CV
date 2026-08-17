import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M01.01 · Representación de imágenes
 ********************************************************/

export const M0101: HorusTopic = {

  code: "M01.01",
  title: "Representación de imágenes",

  items: [
    item("M01.01.01", "Pixels"),
    item("M01.01.02", "Channels"),
    item("M01.01.03", "RGB"),
    item("M01.01.04", "Grayscale"),
    item("M01.01.05", "Resolution"),
    item("M01.01.06", "Image tensors"),
    item("M01.01.07", "Normalization"),
    item("M01.01.08", "Data augmentation"),

  ],

};
