import { Task, TaskStatus } from "../typeTasker";

export interface Runner {
  name: string;
  status: TaskStatus;
  execute(): void;
}
