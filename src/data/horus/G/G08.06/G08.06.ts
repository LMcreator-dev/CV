import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G08.06
 * Regularización
 ********************************************************/

export const G0806: HorusTopic = {

  code: "G08.06",

  title: "Regularización",

  items: [

    item("G08.06.01", "L1 regularization"),
    item("G08.06.02", "L2 regularization"),
    item("G08.06.03", "Weight decay"),
    item("G08.06.04", "Dropout"),
    item("G08.06.05", "Data augmentation"),
    item("G08.06.06", "Early stopping"),
    item("G08.06.07", "Label smoothing"),
    item("G08.06.08", "Batch normalization"),
    item("G08.06.09", "Layer normalization"),

  ],

};
