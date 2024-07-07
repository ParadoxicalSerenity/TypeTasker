import winston from "winston";
import { Task } from "../task/task";

export class TypeTaskerEngine {
  tasks: Task[] = [];
  logger: winston.Logger;
  constructor(logger: winston.Logger) {
    this.logger = logger;
  }
  add(task: Task) {
    this.logger.verbose(`Registering ${task.taskName} to internal engine...`);
    this.tasks.push({
      taskName: task.taskName,
      callback: task.callback,
    });
  }
  execute() {
    this.tasks.every((task, index) => {
      this.logger.info(`Running ${task.taskName}`);
      task.callback();
      if (index === this.tasks.length) return false;
      return true;
    });
  }
}
