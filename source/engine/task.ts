import { executeCommand } from "../execution";

type TaskStatus = "Pending" | "Waiting" | "Processing" | "Done";

export class Task {
  name: string;
  status: TaskStatus;
  private dependencies: Task[];
  callback?: () => void;
  command?: string;
  args?: string[];

  constructor(name: string) {
    this.name = name;
    this.status = "Pending";
    this.dependencies = [];
  }

  dependsOn(tasks: Task[]) {
    // Register Dependent Tasks
    this.dependencies = tasks;
    return this;
  }
  registerCallback(callback: () => void) {
    if (this.command && this.args)
      throw new Error(
        "Can't register a callback when a command has been defined."
      );
    this.callback = callback;
    return this;
  }
  registerCommand(command: string, args: string[]) {
    if (this.callback)
      throw new Error(
        "Can't register a command when a callback has been defined."
      );
    this.command = command;
    this.args = args;
    return this;
  }
  async execute() {
    if (this.status !== "Pending") return;
    this.status = "Waiting";
    const promises = this.dependencies.map((task) => task.execute());
    await Promise.all(promises);
    this.status = "Processing";
    if (this.callback) {
      this.status = "Processing";
      this.callback();
      this.status = "Done";
    }
    if (this.command && this.args) {
      this.status = "Processing";
      await executeCommand(this.command, this.args);
      this.status = "Done";
    }
    console.log(this.name);
  }
}
