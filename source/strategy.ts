import { GraphNode } from "./main";

export type StratagyType = "Parallel" | "Serial";

export class BaseStrategy {
  readonly stratagyType: StratagyType;
  readonly children: GraphNode[];

  constructor(stratagyType: StratagyType, children: GraphNode[]) {
    this.stratagyType = stratagyType;
    this.children = children;
  }
}

export class Parallel extends BaseStrategy {
  constructor(children: GraphNode[]) {
    super("Parallel", children);
  }
}

export class Serial extends BaseStrategy {
  constructor(children: GraphNode[]) {
    super("Serial", children);
  }
}
