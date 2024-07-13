import winston, { verbose } from "winston";
import { TypeTaskerTask } from "./task";

export class TypeTaskerEngine {
  logger: winston.Logger | undefined;
  tasks: TypeTaskerTask[] = [];
  constructor(logger: winston.Logger | undefined) {
    this.logger = logger;
  }

  private taskNameIsRegistered(task_name: string): boolean {
    return this.tasks.some((task) => task.name === task_name);
  }
  findTask(task_name: string) {
    return this.tasks.find((task) => task.name === task_name);
  }

  register(task: TypeTaskerTask) {
    if (!this.taskNameIsRegistered(task.name)) {
      this.logger?.verbose(`Registering ${task.name}`);
      this.tasks.push(task);
    } else throw new Error("Tasks with the same name are not permitted.");
  }
  start(task_name: string) {
    this.logger?.debug(`Attempting to run ${task_name}`);
    const task = this.findTask(task_name);
    if (!task)
      throw new Error(`${task_name} not registered with the execution engine`);
    this.run(task);
  }
  async run(task: TypeTaskerTask) {
    if (task.status === "Pending") {
      this.executeDependencies(task);
      this.executeSelf(task);
    }
  }

  private executeDependencies(task: TypeTaskerTask) {
    task.status = "Waiting";
    this.logger?.verbose(`${task.name} - ${task.status}`);
    const promises = task.dependsOn.map(async (task) => await this.run(task));
    Promise.all(promises);
  }

  private executeSelf(task: TypeTaskerTask) {
    task.status = "Processing";
    this.logger?.verbose(`${task.name} - ${task.status}`);
    task.runner.execute();
    task.status = "Done";
    this.logger?.verbose(`${task.name} - ${task.status}`);
  }
}
