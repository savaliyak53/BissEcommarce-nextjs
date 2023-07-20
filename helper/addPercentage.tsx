import { addPercentdata } from "../types";

export default function AddPercent({ number, percentage }: addPercentdata) {
  return Math.round(number + number * (percentage / 100));
}
