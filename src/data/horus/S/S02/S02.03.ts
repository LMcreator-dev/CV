import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S02.03 · Kernels
 ********************************************************/

export const S0203: HorusTopic = {

  code: "S02.03",
  title: "Kernels",

  items: [
    item("S02.03.01", "Kernel launch"),
    item("S02.03.02", "Thread indexing"),
    item("S02.03.03", "Synchronization"),
    item("S02.03.04", "__syncthreads"),
    item("S02.03.05", "Atomic operations"),
    item("S02.03.06", "Tiled kernels"),
    item("S02.03.07", "Asynchronous execution"),
    item("S02.03.08", "CUDA streams"),
    item("S02.03.09", "CUDA events"),

  ],

};
