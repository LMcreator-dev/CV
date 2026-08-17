import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/*******************************************************
 * M06.07
 * Generación e inferencia
 *******************************************************/

export const M0607: HorusTopic = {

  code: "M06.07",
  title: "Generación e inferencia",

  items: [
    item("M06.07.01", "Autoregressive decoding"),
    item("M06.07.02", "Greedy decoding"),
    item("M06.07.03", "Temperature"),
    item("M06.07.04", "Top-k"),
    item("M06.07.05", "Top-p"),
    item("M06.07.06", "Repetition penalty"),
    item("M06.07.07", "Stop tokens"),
    item("M06.07.08", "KV cache"),
    item("M06.07.09", "Context window"),
    item("M06.07.10", "Long-context models"),
    item("M06.07.11", "Speculative decoding"),

  ],

};
