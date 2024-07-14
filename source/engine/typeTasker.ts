import winston from "winston";
import { getLogger } from "../logger/logger";
import { TypeTaskerEngine } from "./engine";
import { TypeTaskerCallback } from "./task_runners/callbackRunner";
import { TypeTaskerCommand } from "./task_runners/commandRunner";
import { TypeTaskerEmpty } from "./task_runners/emptyRunner";

export type TaskStatus = "Pending" | "Waiting" | "Processing" | "Done";
export type Task = TypeTaskerCommand | TypeTaskerCallback | TypeTaskerEmpty;

export type TaskBaseParams = {
  name: string;
  dependsOn: Task[];
};

type TypeTaskerConfig = {
  logger: LoggerConfig;
};

type LoggerConfig = {
  logLevel: "verbose" | "info" | "debug";
  enabled: boolean;
};

export class TypeTasker {
  logger: winston.Logger | undefined;
  engine: TypeTaskerEngine;

  constructor(config: TypeTaskerConfig) {
    if (config.logger.enabled) this.logger = getLogger(config.logger.logLevel);
    this.engine = new TypeTaskerEngine(this.logger);
  }

  async run(task: Task) {
    this.logger?.info("Starting TypeTasker Execution");
    await this.engine.start(task);
  }
}
