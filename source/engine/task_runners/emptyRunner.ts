import { spawn } from "child_process";
import { Task, TaskBaseParams, TaskStatus } from "../task";
import { Runner } from "./runnerInterface";

export type EmptyTaskParams = TaskBaseParams;

export class TypeTaskerEmpty implements Runner {
  name: string;
  dependsOn: Task[];
  private _status: TaskStatus;

  constructor(params: EmptyTaskParams) {
    this.name = params.name;
    this.dependsOn = params.dependsOn ?? [];
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
