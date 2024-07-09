import { Runner } from "./runnerInterface";

export class CallbackRunner implements Runner {
  callback: () => void;
  constructor(callback: () => void) {
    this.callback = callback;
  }
  async execute() {
    await this.callback();
  }
}
