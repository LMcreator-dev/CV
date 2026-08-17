import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * S01.02
 * GPU
 ********************************************************/

export const S0102: HorusTopic = {

  code: "S01.02",

  title: "GPU",

  items: [

    item("S01.02.01", "GPU architecture"),
    item("S01.02.02", "Streaming multiprocessor"),
    item("S01.02.03", "CUDA core"),
    item("S01.02.04", "Tensor core"),
    item("S01.02.05", "VRAM"),
    item("S01.02.06", "Memory bandwidth"),
    item("S01.02.07", "Warp"),
    item("S01.02.08", "Occupancy"),
    item("S01.02.09", "FLOPS"),
    item("S01.02.10", "Arithmetic intensity"),

  ],

};
