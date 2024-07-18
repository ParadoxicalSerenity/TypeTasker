import { Task } from "./typeTasker";

export type StratagyType = "Parallel" | "Serial";

export class BaseStrategy {
  private stratagyType: StratagyType;
  private tasks: Task[];
  constructor(stratagyType: StratagyType, tasks: Task[]) {
    this.stratagyType = stratagyType;
    this.tasks = tasks;
  }
}

export class Parallel extends BaseStrategy {
  constructor(tasks: Task[]) {
    super("Parallel", tasks);
  }
}

export class Serial extends BaseStrategy {
  constructor(tasks: Task[]) {
    super("Serial", tasks);
  }
}
