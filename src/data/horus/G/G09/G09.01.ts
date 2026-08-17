import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G09.01
 * Tensors
 ********************************************************/

export const G0901: HorusTopic = {

  code: "G09.01",
  title: "Tensors",

  items: [
    item("G09.01.01", "Tensor creation"),
    item("G09.01.02", "Shape"),
    item("G09.01.03", "dtype"),
    item("G09.01.04", "Device"),
    item("G09.01.05", "Indexing"),
    item("G09.01.06", "Broadcasting"),
    item("G09.01.07", "Reshape"),
    item("G09.01.08", "View"),
    item("G09.01.09", "Permute"),
    item("G09.01.10", "Contiguous tensors"),
    item("G09.01.11", "Matrix multiplication"),
    item("G09.01.12", "einsum"),

  ],

};
