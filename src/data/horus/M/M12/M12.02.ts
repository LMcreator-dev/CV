import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M12.02 · Chain-of-thought
 ********************************************************/

export const M1202: HorusTopic = {

  code: "M12.02",
  title: "Chain-of-thought",

  items: [
    item("M12.02.01", "Chain-of-thought"),
    item("M12.02.02", "Zero-shot reasoning"),
    item("M12.02.03", "Few-shot reasoning"),
    item("M12.02.04", "Self-consistency"),
    item("M12.02.05", "Reasoning traces"),
    item("M12.02.06", "Reasoning supervision"),
    item("M12.02.07", "CoT distillation"),

  ],

};
