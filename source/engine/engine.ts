import { Task } from "./typeTasker";
import { Logger } from "../logger";
import { GraphNode } from "../main";
import { BaseStrategy } from "../strategy";

export class TypeTaskerEngine {
  logger: Logger;
  tasks: Task[] = [];
  constructor(logger: Logger) {
    this.logger = logger;
  }

  run(node: BaseStrategy) {}
  start(node: BaseStrategy) {}
  registerTask(task: Task): void {
    const exists = this.tasks.find((stored) => {
      if (stored.name === task.name) return true;
      return false;
    });
    if (exists) throw new Error("Duplicate job registration is not allowed.");
    this.tasks.push(task);
  }
}
