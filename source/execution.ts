import { spawn } from "child_process";
export async function executeCommand(command: string, args: string[]) {
  spawn(command, args, {
    cwd: process.cwd(),
    detached: true,
    stdio: "inherit",
  });
}
