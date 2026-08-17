import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G08.02
 * Forward y loss
 ********************************************************/

export const G0802: HorusTopic = {

  code: "G08.02",

  title: "Forward y loss",

  items: [

    item("G08.02.01", "Forward pass"),
    item("G08.02.02", "Computational graph"),
    item("G08.02.03", "Logits"),
    item("G08.02.04", "Probability output"),
    item("G08.02.05", "Mean squared error"),
    item("G08.02.06", "Binary cross entropy"),
    item("G08.02.07", "Categorical cross entropy"),
    item("G08.02.08", "Negative log likelihood"),

  ],

};
