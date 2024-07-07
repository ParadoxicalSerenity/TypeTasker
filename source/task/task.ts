export type Task = {
  taskName: string;
  callback: () => void;
};

export class TT_Task implements Task {
  taskName: string;
  callback: () => void;
  constructor(taskName: string, callback: () => void) {
    this.taskName = taskName;
    this.callback = callback;
  }
}
