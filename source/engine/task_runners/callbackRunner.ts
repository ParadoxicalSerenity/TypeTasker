import { Runner } from "./runnerInterface";
import { Task, TaskBaseParams, TaskStatus } from "../typeTasker";

export type CallbackTaskParams = {
  callback: () => void;
} & TaskBaseParams;

export class TypeTaskerCallback implements Runner {
  name: string;

  private _status: TaskStatus;
  callback: () => void;

  constructor(params: CallbackTaskParams) {
    this.name = params.name;
    this._status = "Pending";
    this.callback = params.callback;
  }
  async execute(): Promise<void> {
    await this.executeCommand(this.callback);
  }
  private async executeCommand(callback: () => void) {
    return await callback();
  }
  get status() {
    return this._status;
  }
  set status(status: TaskStatus) {
    this._status = status;
  }
}
