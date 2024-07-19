import { Task } from "./engine/typeTasker";
import { BaseStrategy } from "./strategy";

export { Runner as CustomRunner } from "./engine/task_runners/runnerInterface";
export { TypeTasker } from "./engine/typeTasker";
export { TypeTaskerCommand } from "./engine/task_runners/commandRunner";
export { TypeTaskerEmpty } from "./engine/task_runners/emptyRunner";
export { TypeTaskerCallback } from "./engine/task_runners/callbackRunner";

export type GraphNode = Task | BaseStrategy;
