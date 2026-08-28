import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G05.03
 * Distribuciones
 ********************************************************/

export const G0503: HorusTopic = {

  code: "G05.03",
  title: "Distribuciones",

  items: [
    item("G05.03.01", "Bernoulli"),
    item("G05.03.02", "Binomial"),
    item("G05.03.03", "Categórica"),
    item("G05.03.04", "Multinomial"),
    item("G05.03.05", "Poisson"),
    item("G05.03.06", "Uniforme"),
    item("G05.03.07", "Normal"),
    item("G05.03.08", "Log-normal"),
    item("G05.03.09", "Exponencial"),
    item("G05.03.10", "Distribuciones conjuntas"),

  ],

};
