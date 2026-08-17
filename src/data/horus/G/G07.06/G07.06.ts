import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/*******************************************************
 * G07.06
 * Evaluación
 *******************************************************/

export const G0706: HorusTopic = {

  code: "G07.06",
  title: "Evaluación",

  items: [
    item("G07.06.01", "Overfitting"),
    item("G07.06.02", "Underfitting"),
    item("G07.06.03", "Bias-variance tradeoff"),
    item("G07.06.04", "Cross-validation"),
    item("G07.06.05", "Stratified cross-validation"),
    item("G07.06.06", "Accuracy"),
    item("G07.06.07", "Precision"),
    item("G07.06.08", "Recall"),
    item("G07.06.09", "F1"),
    item("G07.06.10", "ROC"),
    item("G07.06.11", "AUC"),
    item("G07.06.12", "PR-AUC"),
    item("G07.06.13", "Calibration"),
    item("G07.06.14", "Confusion matrix"),
    item("G07.06.15", "Regression metrics"),

  ],

};
