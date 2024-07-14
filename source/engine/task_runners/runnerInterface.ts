import { Task, TaskStatus } from "../task";

export interface Runner {
  name: string;
  dependsOn: Task[];
  status: TaskStatus;
  execute(): void;
}
