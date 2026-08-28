import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S07.03 · Privacy
 ********************************************************/

export const S0703: HorusTopic = {

  code: "S07.03",
  title: "Privacy",

  items: [
    item("S07.03.01", "Membership inference"),
    item("S07.03.02", "Model inversion"),
    item("S07.03.03", "Data memorization"),
    item("S07.03.04", "Differential privacy"),
    item("S07.03.05", "Private aggregation"),
    item("S07.03.06", "Privacy-preserving ML"),

  ],

};
