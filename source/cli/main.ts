import { program, Option } from "@commander-js/extra-typings";
import { argv } from "process";
import TypeTasker from "../main";
import { getLogger } from "../logger";

program
  .name("TypeTasker")
  .description("TypeTasker - Typescript first task runner.")
  .version("0.0.6")
  .addOption(
    new Option("--logLevel <level>", "set log level")
      .choices(["error", "warn", "info", "verbose", "debug"] as const)
      .default("info")
  )

  .action((option) => {
    const logger = getLogger(option.logLevel);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    new TypeTasker(logger).execute();
  });

program.parse(argv);
