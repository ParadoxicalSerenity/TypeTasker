import { exec } from "child_process";
import TypeTasker from "./main.js";

const defaultTypeTasker = new TypeTasker();
defaultTypeTasker.register("build", () => {
  exec("npm --version", function (err, stdout) {
    console.log(stdout);
    if (err) console.log(err);
  });
});
defaultTypeTasker.register("prebuild", () => {
  exec("node --version", function (err, stdout) {
    console.log(stdout);
    if (err) console.log(err);
  });
});

defaultTypeTasker.execute();
