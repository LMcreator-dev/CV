import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M08.04 · Diffusion
 ********************************************************/

export const M0804: HorusTopic = {

  code: "M08.04",
  title: "Diffusion",

  items: [
    item("M08.04.01", "Forward diffusion"),
    item("M08.04.02", "Noise schedule"),
    item("M08.04.03", "Reverse diffusion"),
    item("M08.04.04", "Score function"),
    item("M08.04.05", "Noise prediction"),
    item("M08.04.06", "DDPM"),
    item("M08.04.07", "DDIM"),
    item("M08.04.08", "Latent diffusion"),
    item("M08.04.09", "U-Net"),
    item("M08.04.10", "Conditioning"),
    item("M08.04.11", "Classifier-free guidance"),
    item("M08.04.12", "Diffusion Transformer"),

  ],

};
