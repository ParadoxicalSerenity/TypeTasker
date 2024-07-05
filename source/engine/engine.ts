export interface Task {
  taskName: string;
  cb: () => any;
}

export class TypeTaskerEngine {
  tasks: Task[] = [];
  constructor() {}
  add(task: Task) {
    this.tasks.push({
      taskName: task.taskName,
      cb: task.cb,
    });
  }
}
