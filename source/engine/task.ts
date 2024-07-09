import { Runner } from "./runners/runnerInterface";

type TaskStatus = "Pending" | "Waiting" | "Processing" | "Done";

export type TypeTaskerTypeParams = {
  name: string;
  runner: Runner;
  dependsOn: TypeTaskerTask[];
};

export class TypeTaskerTask implements TypeTaskerTypeParams {
  name: string;
  runner: Runner;
  dependsOn: TypeTaskerTask[];
  private _status: TaskStatus;
  constructor(params: TypeTaskerTypeParams) {
    this.name = params.name;
    this.runner = params.runner;
    this.dependsOn = params.dependsOn ?? [];
    this._status = "Pending";
  }
  get status() {
    return this._status;
  }
  set status(status: TaskStatus) {
    this._status = status;
  }
}
