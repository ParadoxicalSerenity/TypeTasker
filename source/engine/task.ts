import { TypeTaskerCallback } from "./runners/callbackRunner";
import { TypeTaskerCommand } from "./runners/commandRunner";
import { TypeTaskerEmpty } from "./runners/emptyRunner";

export type TaskStatus = "Pending" | "Waiting" | "Processing" | "Done";
export type Task = TypeTaskerCommand | TypeTaskerCallback | TypeTaskerEmpty;

export type TaskBaseParams = {
  name: string;
  dependsOn: Task[];
};
