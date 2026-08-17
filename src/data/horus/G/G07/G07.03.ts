import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G07.03
 * Clasificación
 ********************************************************/

export const G0703: HorusTopic = {

  code: "G07.03",
  title: "Clasificación",

  items: [
    item("G07.03.01", "Logistic regression"),
    item("G07.03.02", "Binary classification"),
    item("G07.03.03", "Multiclass classification"),
    item("G07.03.04", "Multilabel classification"),
    item("G07.03.05", "Decision boundaries"),
    item("G07.03.06", "Naive Bayes"),
    item("G07.03.07", "k-NN"),
    item("G07.03.08", "SVM"),
    item("G07.03.09", "Kernel trick"),

  ],

};
