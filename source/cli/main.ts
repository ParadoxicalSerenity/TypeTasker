import { program, Option } from "@commander-js/extra-typings";
import { argv } from "process";
import TypeTasker from "../main";
import { getLogger } from "../logger";

program
  .name("TypeTasker")
  .description("TypeTasker - Typescript first task runner.")
  .version("0.0.4")
  .addOption(
    new Option("--logLevel <level>", "set log level")
      .choices(["verbose", "info", "error"] as const)
      .default("info")
  )

  .action((option) => {
    console.log(option.logLevel);
    const logger = getLogger(option.logLevel);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const instance = new TypeTasker(logger);
  });

program.parse(argv);
