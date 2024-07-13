import winston from "winston";
import { getLogger } from "../logger";
import { TypeTaskerEngine } from "./engine";
import { Task } from "./task";

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
