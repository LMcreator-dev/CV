import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R09.01 · Transformer interpretability
 ********************************************************/

export const R0901: HorusTopic = {

  code: "R09.01",
  title: "Transformer interpretability",

  items: [
    item("R09.01.01", "Residual stream"),
    item("R09.01.02", "Attention head analysis"),
    item("R09.01.03", "MLP neuron analysis"),
    item("R09.01.04", "Logit lens"),
    item("R09.01.05", "Tuned lens"),
    item("R09.01.06", "Activation analysis"),
    item("R09.01.07", "Representation analysis"),

  ],

};
