import { spawn } from "child_process";
import { Runner } from "./task";

export class CommandRunner implements Runner {
  private command: string;
  private args: string[];
  constructor(command: string, args: string[]) {
    this.command = command;
    this.args = args;
  }
  async execute() {
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
}
