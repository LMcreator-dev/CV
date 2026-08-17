import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * M11.03 · Text-to-speech
 ********************************************************/

export const M1103: HorusTopic = {

  code: "M11.03",
  title: "Text-to-speech",

  items: [
    item("M11.03.01", "TTS"),
    item("M11.03.02", "Acoustic model"),
    item("M11.03.03", "Neural vocoder"),
    item("M11.03.04", "WaveNet"),
    item("M11.03.05", "Mel-to-audio generation"),
    item("M11.03.06", "Prosody"),

  ],

};
