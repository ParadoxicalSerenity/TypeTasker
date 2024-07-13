import winston, { verbose } from "winston";
import { Task } from "./task";

export class TypeTaskerEngine {
  logger: winston.Logger | undefined;
  tasks: Task[] = [];
  constructor(logger: winston.Logger | undefined) {
    this.logger = logger;
  }

  private taskNameIsRegistered(task_name: string): boolean {
    return this.tasks.some((task) => task.name === task_name);
  }
  private findTask(task_name: string) {
    return this.tasks.find((task) => task.name === task_name);
  }

  register(task: Task) {
    if (!this.taskNameIsRegistered(task.name)) {
      this.logger?.verbose(`Registering ${task.name}`);
      this.tasks.push(task);
    } else throw new Error("Tasks with the same name are not permitted.");
  }
  start(task: Task) {
    this.logger?.debug(`Attempting to run ${task.name}`);
    this.run(task);
  }
  async run(task: Task) {
    if (task.status === "Pending") {
      task.status = "Waiting";
      this.logger?.verbose(`${task.name} - ${task.status}`);
      const promises = task.dependsOn.map(async (task) => await this.run(task));
      Promise.allSettled(promises);

      task.status = "Processing";
      this.logger?.verbose(`${task.name} - ${task.status}`);
      await task.execute();
      task.status = "Done";
      this.logger?.verbose(`${task.name} - ${task.status}`);
    }
  }
}
