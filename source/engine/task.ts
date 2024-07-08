import winston from "winston";

type TaskStatus = "Pending" | "Waiting" | "Processing" | "Done";

export interface Runner {
  execute(): void;
}

export type TaskParams = {
  name: string;
  runner: Runner;
  dependsOn: Task[];
};

export class Task {
  name: string;
  status: TaskStatus;
  private dependencies: Task[];
  private runner: Runner;

  constructor(params: TaskParams) {
    this.name = params.name;
    this.runner = params.runner;
    this.dependencies = params.dependsOn;
    this.status = "Pending";
  }

  private runSelf(logger: winston.Logger) {
    this.status = "Processing";
    logger.info(`Running ${this.name} task...`);
    this.runner.execute();
    this.status = "Done";
  }

  private async runDependencies(logger: winston.Logger) {
    this.status = "Waiting";
    logger.verbose(`Running ${this.name} task dependencies...`);
    if (this.dependencies.length >= 1) {
      const promises = this.dependencies.map((task) => task.execute(logger));
      await Promise.all(promises);
    }
  }

  async execute(logger: winston.Logger) {
    if (this.status !== "Pending") return;
    this.runDependencies(logger);
    this.runSelf(logger);
  }
}
