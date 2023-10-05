import { addPercentdata } from "../types";

export default function AddPercent({ number, percentage }: addPercentdata):number {
  return Math.round(number + number * (percentage / 100));
}
