import { Task } from "./typeTasker";
import { Logger } from "../logger";
import { BaseStrategy } from "../strategy";

export class TypeTaskerEngine {
  logger: Logger;
  graph?: BaseStrategy;
  constructor(logger: Logger) {
    this.logger = logger;
  }

  run(node: BaseStrategy) {}
  start(node: BaseStrategy) {
    this.logger.debug("Registering graph with engine...");
    this.graph = node;
    this.logger.debug("Starting engine execution...");
    this.run(node);
  }
}
