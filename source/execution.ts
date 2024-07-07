import { spawn } from "child_process";
export async function executeCommand(command: string, args: string[]) {
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
