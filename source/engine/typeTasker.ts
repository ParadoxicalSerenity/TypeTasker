import { Logger, LoggerParams } from "../logger/logger";
import { TypeTaskerEngine } from "./engine";
import { TypeTaskerCallback } from "./task_runners/callbackRunner";
import { TypeTaskerCommand } from "./task_runners/commandRunner";
import { TypeTaskerEmpty } from "./task_runners/emptyRunner";

export type TaskStatus = "Pending" | "Waiting" | "Processing" | "Done";
export type Task = TypeTaskerCommand | TypeTaskerCallback | TypeTaskerEmpty;

export type TaskBaseParams = {
  name: string;
  dependsOn?: Task[];
};

type TypeTaskerConfig = {
  logger: LoggerParams;
};

export class TypeTasker {
  logger: Logger;
  engine: TypeTaskerEngine;

  constructor(config: TypeTaskerConfig) {
    this.logger = new Logger({
      enabled: config.logger.enabled,
      logLevel: config.logger.logLevel,
    });
    this.engine = new TypeTaskerEngine(this.logger);
  }

  async run(task: Task) {
    this.logger?.info("Starting TypeTasker Execution");
    await this.engine.start(task);
  }
}
