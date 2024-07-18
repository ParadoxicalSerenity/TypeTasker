import { Task } from "./typeTasker";

export type StratagyType = "Parallel" | "Serial";
export type Node = Task | BaseStrategy;

export class BaseStrategy {
  private stratagyType: StratagyType;
  private children: Node[];

  constructor(stratagyType: StratagyType, children: Node[]) {
    this.stratagyType = stratagyType;
    this.children = children;
  }
}

export class Parallel extends BaseStrategy {
  constructor(children: Node[]) {
    super("Parallel", children);
  }
}

export class Serial extends BaseStrategy {
  constructor(children: Node[]) {
    super("Serial", children);
  }
}
