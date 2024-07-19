import { Task } from "./typeTasker";
import { Logger } from "../logger";
import { BaseStrategy, Parallel, Serial } from "../strategy";
import { GraphNode } from "../main";

export class TypeTaskerEngine {
  logger: Logger;
  graph: BaseStrategy | undefined;
  constructor(logger: Logger) {
    this.logger = logger;
  }

  private graphIsReady(): this is { graph: BaseStrategy } {
    return this.graph !== undefined;
  }
  private nodeIsStrategy(node: GraphNode): node is BaseStrategy {
    if ("stratagyType" in node) {
      if (node.children.length === 0) {
        this.logger.warn("Empty strategy detected.");
      }
      return true;
    }
    return false;
  }

  private processSerial(node: Serial) {
    this.logger.debug(`...of type ${node.stratagyType}...`);
    node.children.forEach((child) => {
      this.logger.debug(`Calling run on child node...`);
      this.run(child);
    });
  }
  private async processParallel(node: Parallel) {
    this.logger.debug(`...of type ${node.stratagyType}...`);
    const promises = node.children.map(async (node) => this.run(node));
    await Promise.allSettled(promises);
  }

  private async run(node: GraphNode) {
    //First we want to check if we have a stratagy since that changes what we are doing.
    this.logger.debug("Running node...");
    if (this.nodeIsStrategy(node)) {
      this.logger.debug(`Node is a strategy...`);
      if (node.stratagyType === "Serial") this.processSerial(node);
      if (node.stratagyType === "Parallel") await this.processParallel(node);
    } else {
      this.logger.info(`Running ${node.name} logic`);
      await node.execute();
    }
  }
  start(node: BaseStrategy) {
    this.logger.debug("Registering graph with engine...");
    this.graph = node;
    this.logger.debug("Starting engine execution...");
    this.run(node);
  }
}
