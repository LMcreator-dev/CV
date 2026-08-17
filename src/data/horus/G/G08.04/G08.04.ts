import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G08.04
 * Optimización
 ********************************************************/

export const G0804: HorusTopic = {

  code: "G08.04",

  title: "Optimización",

  items: [

    item("G08.04.01", "Gradient descent"),
    item("G08.04.02", "Stochastic gradient descent"),
    item("G08.04.03", "Mini-batch SGD"),
    item("G08.04.04", "Momentum"),
    item("G08.04.05", "Nesterov momentum"),
    item("G08.04.06", "AdaGrad"),
    item("G08.04.07", "RMSProp"),
    item("G08.04.08", "Adam"),
    item("G08.04.09", "AdamW"),
    item("G08.04.10", "Learning-rate warmup"),
    item("G08.04.11", "Learning-rate decay"),
    item("G08.04.12", "Cosine decay"),
    item("G08.04.13", "One-cycle schedule"),

  ],

};
