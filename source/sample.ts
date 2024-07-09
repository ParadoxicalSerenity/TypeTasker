import { TypeTasker, CommandRunner } from "./main";

const typeTasker = new TypeTasker({
  logger: { enabled: true, logLevel: "verbose" },
});

const test_one = typeTasker.createTask({
  name: "test_one",
  runner: new CommandRunner("tree", ["-I", "node_modules", "."]),
  dependsOn: [],
});
const test_two = typeTasker.createTask({
  name: "test_two",
  runner: new CommandRunner("ls", ["/usr/share/doc"]),
  dependsOn: [test_one],
});

const test_three = typeTasker.createTask({
  name: "test_three",
  runner: new CommandRunner("ps", ["aux"]),
  dependsOn: [test_two, test_one],
});

typeTasker.run(
  typeTasker.createTask({
    name: "Default",
    runner: new CommandRunner("df", ["--human-readable", "/"]),
    dependsOn: [test_two, test_one, test_three],
  })
);
