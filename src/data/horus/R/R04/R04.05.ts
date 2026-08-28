import { item } from "../../helpers";
import type { HorusTopic } from "../../types";

/********************************************************
 * R04.05 · Robotics y Control
 ********************************************************/

export const R0405: HorusTopic = {

  code: "R04.05",
  title: "Robotics y Control",

  items: [
    item("R04.05.01", "State estimation"),
    item("R04.05.02", "Control systems"),
    item("R04.05.03", "PID"),
    item("R04.05.04", "Kalman filter"),
    item("R04.05.05", "Model predictive control"),
    item("R04.05.06", "Motion planning"),
    item("R04.05.07", "Imitation learning"),
    item("R04.05.08", "Reinforcement learning for robotics"),
    item("R04.05.09", "Sim-to-real"),

  ],

};
