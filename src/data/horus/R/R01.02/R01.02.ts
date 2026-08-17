import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R01.02
 * Diseño experimental
 ********************************************************/

export const R0102: HorusTopic = {

  code: "R01.02",

  title: "Diseño experimental",

  items: [

    item("R01.02.01", "Baseline"),
    item("R01.02.02", "Control"),
    item("R01.02.03", "Treatment"),
    item("R01.02.04", "Variables"),
    item("R01.02.05", "Confounders"),
    item("R01.02.06", "Ablation study"),
    item("R01.02.07", "Hyperparameter control"),
    item("R01.02.08", "Replicate experiments"),
    item("R01.02.09", "Statistical significance"),
    item("R01.02.10", "Error analysis"),

  ],

};
