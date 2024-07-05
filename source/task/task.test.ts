import { test, describe, it } from "node:test";
import assert from "node:assert";
import { TT_Task } from "./task.js";

describe("Tasks", () => {
  it("should not error when creating a task", () => {
    assert.doesNotThrow(() => new TT_Task("Test", () => {}));
  });
});
