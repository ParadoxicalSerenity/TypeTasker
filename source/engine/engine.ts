import { Task } from "./typeTasker";
import { Logger } from "./logger/logger";
import { BaseStrategy } from "./strategy";

export class TypeTaskerEngine {
  logger: Logger;
  tasks: Task[] = [];
  constructor(logger: Logger) {
    this.logger = logger;
  }

  registerTask(task: Task): void {
    const exists = this.tasks.find((stored) => {
      if (stored.name === task.name) return true;
      return false;
    });
    if (exists) throw new Error("Duplicate job registration is not allowed.");
    this.tasks.push(task);
  }
}
