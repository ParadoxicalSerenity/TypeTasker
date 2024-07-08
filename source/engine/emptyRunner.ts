import { Runner } from "./task";

export class EmptyRunner implements Runner {
  async execute() {
    // Intentionally Left Empty
  }
}
