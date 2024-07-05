import { test, describe, it } from "node:test";
import assert from "node:assert";
import { TT_Task } from "./task.js";

describe("Tasks", () => {
  it("should not error when creating a task", () => {
    assert.doesNotThrow(() => new TT_Task("Test", () => {}));
  });
  it("should be able to run arbitrarily defined code", () => {
    assert.doesNotThrow(
      () =>
        new TT_Task("Test", () => {
          const x = 5;
          const y = 5;
          const z = x + y;
        })
    );
  });
  it("should have a name", () => {
    const task = new TT_Task("Test", () => {});
    assert.strictEqual(task.taskName, "Test");
  });
});
