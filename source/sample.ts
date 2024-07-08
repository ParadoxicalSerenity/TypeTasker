import { getLogger } from "./logger";
import {TypeTasker, EmptyRunner, Task } from "./main";

new TypeTasker(
  new Task({
    name: "Full Build",
    dependsOn: [
      new Task({
        name: "Build",
        runner: new EmptyRunner(),
        dependsOn: [
          new Task({
            name: "Install",
            runner: new EmptyRunner(),
            dependsOn: [],
          }),
        ],
      }),
    ],
    runner: new EmptyRunner(),
  }),
  getLogger("info")
).run();
