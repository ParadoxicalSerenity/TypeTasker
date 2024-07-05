import { program } from "commander";
import { argv } from "process";

program
  .name("TypeTasker")
  .description("TypeTasker - Typescript first task runner.")
  .version("0.0.4")
  .action(() => {
    console.log("TypeTasker");
  });

program.parse(argv);
