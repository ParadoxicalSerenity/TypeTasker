import winston from "winston";
import { Task } from "./task";

export class TypeTasker {
  private internalTask: Task;
  private logger: winston.Logger;

  constructor(task: Task, logger: winston.Logger) {
    this.internalTask = task;
    this.logger = logger;
  }
  async run() {
    this.internalTask.execute(this.logger);
  }
}
