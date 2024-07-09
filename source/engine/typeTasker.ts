import winston from "winston";
import { getLogger } from "../logger";
import { TypeTaskerTask, TypeTaskerTypeParams } from "./task";
import { TypeTaskerEngine } from "./engine";

type TypeTaskerConfig = {
  logger: LoggerConfig;
};

type LoggerConfig = {
  logLevel: "verbose";
  enabled: boolean;
};

export class TypeTasker {
  logger: winston.Logger | undefined;
  engine: TypeTaskerEngine;
  constructor(config: TypeTaskerConfig) {
    if (config.logger.enabled) this.logger = getLogger(config.logger.logLevel);
    this.engine = new TypeTaskerEngine(this.logger);
  }

  createTask(params: TypeTaskerTypeParams): TypeTaskerTask {
    return new TypeTaskerTask(params);
  }

  async run(task: TypeTaskerTask) {
    this.logger?.info("Starting TypeTasker Execution");
    await this.engine.run(task);
    this.logger?.info("Ending TypeTasker Execution");
  }
}
