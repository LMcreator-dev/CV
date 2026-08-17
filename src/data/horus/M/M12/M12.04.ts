import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M12.04 · Search y test-time compute
 ********************************************************/

export const M1204: HorusTopic = {

  code: "M12.04",
  title: "Search y test-time compute",

  items: [
    item("M12.04.01", "Best-of-N"),
    item("M12.04.02", "Beam search for reasoning"),
    item("M12.04.03", "Tree search"),
    item("M12.04.04", "Search over solutions"),
    item("M12.04.05", "Test-time compute"),
    item("M12.04.06", "Inference-time scaling"),
    item("M12.04.07", "Verifier-guided search"),

  ],

};
