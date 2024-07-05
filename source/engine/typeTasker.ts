import winston from "winston";
import { TypeTaskerEngine } from "./engine.js";
import { TypeTaskerPublicInterface } from "../interfaces.js";

export default class TypeTasker implements TypeTaskerPublicInterface {
  private logger: winston.Logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
        level: "verbose",
      }),
    ],
  });
  private engine = new TypeTaskerEngine(this.logger);
  register(taskName: string, cb: () => void) {
    this.engine.add({
      taskName: taskName,
      cb: cb,
    });
  }
  execute() {
    this.logger.verbose("Starting execution engine");
    this.engine.execute();
    this.logger.verbose("Ending execution engine");
  }
}
