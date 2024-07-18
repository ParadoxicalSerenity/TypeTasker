import { Task } from "./typeTasker";

export type StratagyType = "Parallel" | "Serial";

export interface RunnerStrategy {
  stratagyType: StratagyType;
}

export class BaseStratagy {
  private tasks: Task[];
  constructor(tasks: Task[]) {
    this.tasks = tasks;
  }
}

export class Parallel extends BaseStratagy implements RunnerStrategy {
  stratagyType: StratagyType;
  constructor(tasks: Task[]) {
    super(tasks);
    this.stratagyType = "Parallel";
  }
}

export class Serial extends BaseStratagy implements RunnerStrategy {
  stratagyType: StratagyType;
  constructor(tasks: Task[]) {
    super(tasks);
    this.stratagyType = "Serial";
  }
}
