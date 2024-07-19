import { Logger, LoggerParams } from "../logger";
import { TypeTaskerEngine } from "./engine";
import { TypeTaskerCallback } from "./task_runners/callbackRunner";
import { TypeTaskerCommand } from "./task_runners/commandRunner";
import { TypeTaskerEmpty } from "./task_runners/emptyRunner";
import { BaseStrategy } from "../strategy";

export type TaskStatus = "Pending" | "Waiting" | "Processing" | "Done";
export type Task = TypeTaskerCommand | TypeTaskerCallback | TypeTaskerEmpty;

export type TaskBaseParams = {
  name: string;
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
    this.logger.debug("Creating engine instance...");
    this.engine = new TypeTaskerEngine(this.logger);
  }

  async run(node: BaseStrategy) {
    this.logger?.info("Starting TypeTasker Engine...");
    await this.engine.start(node);
  }
}
