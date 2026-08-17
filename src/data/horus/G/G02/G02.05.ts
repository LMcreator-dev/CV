import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G02.05
 * Bases de datos
 ********************************************************/

export const G0205: HorusTopic = {

  code: "G02.05",
  title: "Bases de datos",

  items: [
    item("G02.05.01", "Relational model"),
    item("G02.05.02", "Tables"),
    item("G02.05.03", "Primary keys"),
    item("G02.05.04", "Foreign keys"),
    item("G02.05.05", "Indexes"),
    item("G02.05.06", "SQL SELECT"),
    item("G02.05.07", "JOIN"),
    item("G02.05.08", "GROUP BY"),
    item("G02.05.09", "Aggregations"),
    item("G02.05.10", "Transactions"),
    item("G02.05.11", "ACID"),
    item("G02.05.12", "Normalization"),
    item("G02.05.13", "PostgreSQL"),
    item("G02.05.14", "Redis"),
    item("G02.05.15", "Document databases"),
    item("G02.05.16", "Vector databases"),
    item("G02.05.17", "ANN indexes"),

  ],

};
