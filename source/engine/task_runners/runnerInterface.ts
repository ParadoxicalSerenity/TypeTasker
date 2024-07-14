import { Task, TaskStatus } from "../typeTasker";

export interface Runner {
  name: string;
  dependsOn: Task[];
  status: TaskStatus;
  execute(): void;
}
