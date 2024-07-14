import { program, Option } from "@commander-js/extra-typings";
import { argv } from "process";
import { getLogger } from "../logger/logger";

program
  .name("TypeTasker")
  .description("TypeTasker - Typescript first task runner.")
  .version("0.5.1")
  .addOption(
    new Option("--logLevel <level>", "set log level")
      .choices(["error", "warn", "info", "verbose", "debug"] as const)
      .default("info")
  )

  .action((option) => {
    const logger = getLogger(option.logLevel);
  });

program.parse(argv);
