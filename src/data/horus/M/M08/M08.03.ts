import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M08.03 · GANs
 ********************************************************/

export const M0803: HorusTopic = {

  code: "M08.03",
  title: "GANs",

  items: [
    item("M08.03.01", "Generator"),
    item("M08.03.02", "Discriminator"),
    item("M08.03.03", "Adversarial objective"),
    item("M08.03.04", "Minimax game"),
    item("M08.03.05", "Mode collapse"),
    item("M08.03.06", "WGAN"),
    item("M08.03.07", "GAN stability"),

  ],

};
