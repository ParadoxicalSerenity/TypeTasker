import { Runner } from "./task";

export class CallbackRunner implements Runner {
  callback: () => void;
  constructor(callback: () => void) {
    this.callback = callback;
  }
  async execute() {
    await this.callback();
  }
}
