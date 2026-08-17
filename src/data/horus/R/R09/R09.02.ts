import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R09.02 · Causal interventions
 ********************************************************/

export const R0902: HorusTopic = {

  code: "R09.02",
  title: "Causal interventions",

  items: [
    item("R09.02.01", "Activation patching"),
    item("R09.02.02", "Path patching"),
    item("R09.02.03", "Causal tracing"),
    item("R09.02.04", "Counterfactual activation"),
    item("R09.02.05", "Interchange interventions"),
    item("R09.02.06", "Causal mediation"),

  ],

};
