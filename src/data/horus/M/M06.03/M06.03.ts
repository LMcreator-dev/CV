import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/*******************************************************
 * M06.03
 * Datos de pretraining
 *******************************************************/

export const M0603: HorusTopic = {

  code: "M06.03",
  title: "Datos de pretraining",

  items: [
    item("M06.03.01", "Dataset construction"),
    item("M06.03.02", "Data collection"),
    item("M06.03.03", "Web corpora"),
    item("M06.03.04", "Common Crawl"),
    item("M06.03.05", "Text extraction"),
    item("M06.03.06", "Language identification"),
    item("M06.03.07", "Quality filtering"),
    item("M06.03.08", "Deduplication"),
    item("M06.03.09", "Near-duplicate detection"),
    item("M06.03.10", "PII filtering"),
    item("M06.03.11", "Data contamination"),
    item("M06.03.12", "Data mixtures"),
    item("M06.03.13", "Synthetic data"),

  ],

};
