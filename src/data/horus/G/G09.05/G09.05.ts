import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * G09.05
 * Performance
 ********************************************************/

export const G0905: HorusTopic = {

  code: "G09.05",

  title: "Performance",

  items: [

    item("G09.05.01", "Profiling"),
    item("G09.05.02", "PyTorch Profiler"),
    item("G09.05.03", "Data bottlenecks"),
    item("G09.05.04", "GPU utilization"),
    item("G09.05.05", "CPU-GPU transfers"),
    item("G09.05.06", "Memory fragmentation"),
    item("G09.05.07", "Gradient accumulation"),
    item("G09.05.08", "Activation checkpointing"),

  ],

};
