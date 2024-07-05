import winston, { loggers } from "winston";
import { Task } from "../interfaces.js";

export class TypeTaskerEngine {
  tasks: Task[] = [];
  logger: winston.Logger;
  constructor(logger: winston.Logger) {
    this.logger = logger;
  }
  add(task: Task) {
    this.tasks.push({
      taskName: task.taskName,
      cb: task.cb,
    });
  }
  execute() {
    this.tasks.every((task, index) => {
      this.logger.info(`Running ${task.taskName}`);
      task.cb();
      if (index === this.tasks.length) return false;
      return true;
    });
  }
}
