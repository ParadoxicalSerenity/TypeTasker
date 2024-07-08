import { program, Option } from "@commander-js/extra-typings";
import { argv } from "process";
import { getLogger } from "../logger";
import { TypeTasker } from "../engine/typeTasker";
import { EmptyRunner, Task } from "../main";

program
  .name("TypeTasker")
  .description("TypeTasker - Typescript first task runner.")
  .version("0.2.0")
  .addOption(
    new Option("--logLevel <level>", "set log level")
      .choices(["error", "warn", "info", "verbose", "debug"] as const)
      .default("info")
  )

  .action((option) => {
    const logger = getLogger(option.logLevel);
    const typeTasker = new TypeTasker(
      new Task({
        name: "Example Task",
        runner: new EmptyRunner(),
        dependsOn: [],
      }),
      logger
    );
    typeTasker.run();
  });

program.parse(argv);
