import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G07.08
 * Preparación de datos
 ********************************************************/

export const G0708: HorusTopic = {

  code: "G07.08",
  title: "Preparación de datos",

  items: [
    item("G07.08.01", "Missing data"),
    item("G07.08.02", "Outliers"),
    item("G07.08.03", "Feature scaling"),
    item("G07.08.04", "Standardization"),
    item("G07.08.05", "Normalization"),
    item("G07.08.06", "Encoding categorical variables"),
    item("G07.08.07", "Feature selection"),
    item("G07.08.08", "Feature engineering"),
    item("G07.08.09", "Data leakage"),
    item("G07.08.10", "Class imbalance"),
    item("G07.08.11", "Resampling"),
    item("G07.08.12", "SMOTE"),

  ],

};
