import { TypeTasker, EmptyRunner } from "./main";

const typeTasker = new TypeTasker({
  logger: { enabled: true, logLevel: "verbose" },
});

const test_one = typeTasker.createTask({
  name: "test_one",
  runner: new EmptyRunner(),
  dependsOn: [],
});
const test_two = typeTasker.createTask({
  name: "test_two",
  runner: new EmptyRunner(),
  dependsOn: [test_one],
});
const test_three = typeTasker.createTask({
  name: "test_three",
  runner: new EmptyRunner(),
  dependsOn: [test_two, test_one],
});
const test_four = typeTasker.createTask({
  name: "test_four",
  runner: new EmptyRunner(),
  dependsOn: [test_two, test_one, test_three],
});

typeTasker.run(test_four);
