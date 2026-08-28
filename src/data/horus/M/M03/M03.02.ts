import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M03.02 · Problemas de RNN
 ********************************************************/

export const M0302: HorusTopic = {

  code: "M03.02",
  title: "Problemas de RNN",

  items: [
    item("M03.02.01", "Vanishing gradients"),
    item("M03.02.02", "Exploding gradients"),
    item("M03.02.03", "Long-term dependencies"),
    item("M03.02.04", "Gradient clipping"),
    item("M03.02.05", "Truncated backpropagation"),

  ],

};
