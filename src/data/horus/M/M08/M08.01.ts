import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M08.01 · Autoencoders
 ********************************************************/

export const M0801: HorusTopic = {

  code: "M08.01",
  title: "Autoencoders",

  items: [
    item("M08.01.01", "Encoder"),
    item("M08.01.02", "Decoder"),
    item("M08.01.03", "Latent representation"),
    item("M08.01.04", "Reconstruction loss"),
    item("M08.01.05", "Bottleneck"),

  ],

};
