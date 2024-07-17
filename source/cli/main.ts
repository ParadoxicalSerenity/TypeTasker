import { program, Option } from "@commander-js/extra-typings";
import { argv } from "process";

program
  .name("TypeTasker")
  .description("TypeTasker - Typescript first task runner.")
  .version("0.5.1")
  .addOption(
    new Option("--logLevel <level>", "set log level")
      .choices(["error", "warn", "info", "verbose", "debug"] as const)
      .default("info")
  )

  .action((_option) => {
    //NOP
  });

program.parse(argv);
