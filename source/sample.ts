import { TypeTasker, TypeTaskerCallback } from "./main";

const typeTasker = new TypeTasker({
  logger: { enabled: true, logLevel: "info" },
});

const test_one = new TypeTaskerCallback({
  name: "test_one",
  callback: () => {},
});
const test_two = new TypeTaskerCallback({
  name: "test_two",
  dependsOn: [test_one],
  callback: () => {},
});
const test_three = new TypeTaskerCallback({
  name: "test_three",
  dependsOn: [test_one],
  callback: () => {},
});
const defaultTask = new TypeTaskerCallback({
  name: "def",
  dependsOn: [test_one, test_three, test_two],
  callback: () => {},
});

typeTasker.run(defaultTask);
