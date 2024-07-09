import { TypeTasker, CommandRunner } from "./main";

const typeTasker = new TypeTasker({
  logger: { enabled: true, logLevel: "verbose" },
});

const test_one = typeTasker.createTask({
  name: "test_one",
  runner: new CommandRunner("sudo", ["apt", "upgrade"]),
  dependsOn: [],
});
const test_two = typeTasker.createTask({
  name: "test_two",
  runner: new CommandRunner("npm", ["update"]),
  dependsOn: [test_one],
});
const test_three = typeTasker.createTask({
  name: "test_three",
  runner: new CommandRunner("npm", ["i", "express"]),
  dependsOn: [test_two, test_one],
});

typeTasker.run(
  typeTasker.createTask({
    name: "Default",
    runner: new CommandRunner("sudo", [
      "apt",
      "update",
    ]),
    dependsOn: [test_two, test_one, test_three],
  })
);
