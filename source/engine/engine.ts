import winston from "winston";
import { TypeTaskerTask } from "./task";

export class TypeTaskerEngine {
  logger: winston.Logger | undefined;
  constructor(logger: winston.Logger | undefined) {
    this.logger = logger;
  }
  /**
   * Proxy Method.
   * @param task
   */
  start(task: TypeTaskerTask){
    this.run(task)
  }
  async run(task: TypeTaskerTask) {
    if (task.status === "Pending") {
      task.status = "Waiting";
      this.logger?.verbose(`${task.name} - ${task.status}`);
      const promises = task.dependsOn.map(async (task) => await this.run(task));
      Promise.all(promises);
      task.status = "Processing";
      this.logger?.verbose(`${task.name} - ${task.status}`);
      task.runner.execute();
      task.status = "Done";
      this.logger?.verbose(`${task.name} - ${task.status}`);
    }
  }
}
