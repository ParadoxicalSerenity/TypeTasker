import { Parallel, Serial } from "./strategy";
import { TypeTasker, TypeTaskerCallback } from "./main";

const typeTasker = new TypeTasker({
  logger: { enabled: true, logLevel: "debug" },
});

typeTasker.run(
  new Serial([
    new TypeTaskerCallback({
      name: "test_one",
      callback: () => {},
    }),
    new Parallel([
      new TypeTaskerCallback({
        name: "test_two",
        callback: () => {},
      }),
      new TypeTaskerCallback({
        name: "test_three",
        callback: () => {},
      }),
    ]),
  ])
);
