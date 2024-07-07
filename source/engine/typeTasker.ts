import winston from "winston";
import { TypeTaskerEngine } from "./engine.js";
import { TypeTaskerPublicInterface } from "../interfaces.js";

export default class TypeTasker implements TypeTaskerPublicInterface {
  constructor(logger: winston.Logger) {
    logger.debug("Creating instance of TypeTasker");
    this.logger = logger;
    this.logger.verbose("Creating Engine Instance...");
    this.engine = new TypeTaskerEngine(this.logger);
  }
  private logger;
  private engine;
  register(taskName: string, callback: () => void) {
    this.engine.add({
      taskName: taskName,
      callback: callback,
    });
  }
  execute() {
    this.logger.verbose("Starting execution engine");
    this.engine.execute();
    this.logger.verbose("Ending execution engine");
  }
}
