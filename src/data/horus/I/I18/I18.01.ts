import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I18.01 · Multimodal model
 ********************************************************/

export const I1801: HorusTopic = {

  code: "I18.01",
  title: "Multimodal model",

  items: [
    item("I18.01.01", "Vision encoder"),
    item("I18.01.02", "Text encoder"),
    item("I18.01.03", "Projection layer"),
    item("I18.01.04", "Cross-modal alignment"),
    item("I18.01.05", "Image-text training"),
    item("I18.01.06", "Multimodal inference"),

  ],

};
