import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G09.02
 * Autograd y modelos
 ********************************************************/

export const G0902: HorusTopic = {

  code: "G09.02",
  title: "Autograd y modelos",

  items: [
    item("G09.02.01", "requires_grad"),
    item("G09.02.02", "Computational graph"),
    item("G09.02.03", "backward()"),
    item("G09.02.04", "Gradient accumulation"),
    item("G09.02.05", "no_grad"),
    item("G09.02.06", "nn.Module"),
    item("G09.02.07", "Parameters"),
    item("G09.02.08", "Buffers"),
    item("G09.02.09", "state_dict"),

  ],

};
