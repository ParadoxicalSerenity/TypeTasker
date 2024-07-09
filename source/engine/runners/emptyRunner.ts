import { Runner } from "./runnerInterface";

export class EmptyRunner implements Runner {
  async execute() {
    // Intentionally Left Empty
  }
}
