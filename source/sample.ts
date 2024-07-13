import { TypeTasker, CommandRunner, CallbackRunner } from "./main";

const typeTasker = new TypeTasker({
  logger: { enabled: true, logLevel: "debug" },
});

const test_one = typeTasker.createTask({
  name: "test_one",
  runner: new CallbackRunner(() => {
    console.log("test_one");
  }),
  dependsOn: [],
});
const test_two = typeTasker.createTask({
  name: "test_two",
  runner: new CallbackRunner(() => {
    console.log("test_two");
  }),
  dependsOn: [test_one],
});

const test_three = typeTasker.createTask({
  name: "test_three",
  runner: new CallbackRunner(() => {
    console.log("test_three");
  }),
  dependsOn: [test_two, test_one],
});

const defaultTask = typeTasker.createTask({
  name: "def",
  runner: new CallbackRunner(() => {
    console.log("default");
  }),
  dependsOn: [test_two, test_one, test_three],
});

typeTasker.run("def");
