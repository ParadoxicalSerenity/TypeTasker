import winston from "winston";
import { getLogger } from "../logger";
import { TypeTaskerTask, TypeTaskerTypeParams } from "./task";
import { TypeTaskerEngine } from "./engine";

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

  /**
   * Create and register a task.
   * The task is returned however you only need to keep track of it if you want to use it directly,
   * since it will still be regsitered with the execution engine.
   * @param params
   * @returns
   */
  createTask(params: TypeTaskerTypeParams): TypeTaskerTask {
    const task = new TypeTaskerTask(params);
    this.engine.register(task);
    return task;
  }

  async run(task_name: string) {
    this.logger?.info("Starting TypeTasker Execution");
    await this.engine.start(task_name);
    this.logger?.info("Ending TypeTasker Execution");
  }
}
