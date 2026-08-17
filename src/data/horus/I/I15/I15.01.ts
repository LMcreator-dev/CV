import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * I15.01 · Distributed training
 ********************************************************/

export const I1501: HorusTopic = {

  code: "I15.01",
  title: "Distributed training",

  items: [
    item("I15.01.01", "Data parallelism"),
    item("I15.01.02", "DistributedDataParallel"),
    item("I15.01.03", "Gradient synchronization"),
    item("I15.01.04", "All-reduce"),
    item("I15.01.05", "FSDP"),
    item("I15.01.06", "Checkpoint sharding"),
    item("I15.01.07", "Multi-GPU training"),

  ],

};
