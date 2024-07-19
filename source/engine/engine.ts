import { Task } from "./typeTasker";
import { Logger } from "../logger";
import { BaseStrategy } from "../strategy";

export class TypeTaskerEngine {
  logger: Logger;
  tasks: Task[] = [];
  constructor(logger: Logger) {
    this.logger = logger;
  }

  run(node: BaseStrategy) {}
  start(node: BaseStrategy) {
    this.run(node);
  }
}
