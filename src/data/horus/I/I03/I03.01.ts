import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I03.01 · Autograd engine
 ********************************************************/

export const I0301: HorusTopic = {

  code: "I03.01",
  title: "Autograd engine",

  items: [
    item("I03.01.01", "Computational graph"),
    item("I03.01.02", "Scalar nodes"),
    item("I03.01.03", "Forward evaluation"),
    item("I03.01.04", "Backward propagation"),
    item("I03.01.05", "Gradient accumulation"),
    item("I03.01.06", "Topological ordering"),

  ],

};
