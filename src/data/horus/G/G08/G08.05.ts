import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G08.05
 * Inicialización y estabilidad
 ********************************************************/

export const G0805: HorusTopic = {

  code: "G08.05",
  title: "Inicialización y estabilidad",

  items: [
    item("G08.05.01", "Xavier initialization"),
    item("G08.05.02", "He initialization"),
    item("G08.05.03", "Orthogonal initialization"),
    item("G08.05.04", "Vanishing gradients"),
    item("G08.05.05", "Exploding gradients"),
    item("G08.05.06", "Gradient clipping"),
    item("G08.05.07", "Activation statistics"),
    item("G08.05.08", "Numerical stability"),

  ],

};
