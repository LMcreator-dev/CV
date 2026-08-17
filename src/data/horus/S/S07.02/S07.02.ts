import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S07.02
 * LLM security
 ********************************************************/

export const S0702: HorusTopic = {

  code: "S07.02",

  title: "LLM security",

  items: [

    item("S07.02.01", "Prompt injection"),
    item("S07.02.02", "Indirect prompt injection"),
    item("S07.02.03", "Jailbreaks"),
    item("S07.02.04", "Data exfiltration"),
    item("S07.02.05", "Tool misuse"),
    item("S07.02.06", "Model extraction"),
    item("S07.02.07", "Data poisoning"),
    item("S07.02.08", "Model poisoning"),

  ],

};
