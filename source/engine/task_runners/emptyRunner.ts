import { Task, TaskBaseParams, TaskStatus } from "../typeTasker";
import { Runner } from "./runnerInterface";

export type EmptyTaskParams = TaskBaseParams;

export class TypeTaskerEmpty implements Runner {
  name: string;
  private _status: TaskStatus;

  constructor(params: EmptyTaskParams) {
    this.name = params.name;
    this._status = "Pending";
  }
  async execute(): Promise<void> {
    this._status = "Done";
  }
  get status() {
    return this._status;
  }
  set status(status: TaskStatus) {
    this._status = status;
  }
}
