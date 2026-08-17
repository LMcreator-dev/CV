import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S02.02
 * Memoria CUDA
 ********************************************************/

export const S0202: HorusTopic = {

  code: "S02.02",

  title: "Memoria CUDA",

  items: [

    item("S02.02.01", "Global memory"),
    item("S02.02.02", "Shared memory"),
    item("S02.02.03", "Registers"),
    item("S02.02.04", "Constant memory"),
    item("S02.02.05", "Unified memory"),
    item("S02.02.06", "Memory coalescing"),
    item("S02.02.07", "Bank conflicts"),

  ],

};
