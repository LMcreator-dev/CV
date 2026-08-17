import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M08.02
 * Variational Autoencoders
 ********************************************************/

export const M0802: HorusTopic = {

  code: "M08.02",

  title: "Variational Autoencoders",

  items: [

    item("M08.02.01", "Latent distribution"),
    item("M08.02.02", "Reparameterization trick"),
    item("M08.02.03", "KL divergence loss"),
    item("M08.02.04", "ELBO"),
    item("M08.02.05", "VAE sampling"),

  ],

};
