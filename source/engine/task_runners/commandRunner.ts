import { spawn } from "child_process";
import { Task, TaskBaseParams, TaskStatus } from "../typeTasker";
import { Runner } from "./runnerInterface";

export type CommandTaskParams = {
  command: string;
  args: string[];
} & TaskBaseParams;

export class TypeTaskerCommand implements Runner {
  name: string;
  dependsOn?: Task[];

  private _status: TaskStatus;
  private args: string[];
  private command: string;

  constructor(params: CommandTaskParams) {
    this.name = params.name;
    this.dependsOn = params.dependsOn ?? [];
    this._status = "Pending";
    this.args = params.args;
    this.command = params.command;
  }
  async execute(): Promise<void> {
    await this.executeCommand(this.command, this.args);
  }
  private async executeCommand(command: string, args: string[]) {
    return new Promise((resolve, reject) => {
      const cmd = spawn(command, args, {
        cwd: process.cwd(),
        detached: true,
        stdio: "inherit",
      });

      cmd.on("close", (code: number) => {
        if (code === 0) resolve(code);
        reject(code);
      });
    });
  }
  get status() {
    return this._status;
  }
  set status(status: TaskStatus) {
    this._status = status;
  }
}
