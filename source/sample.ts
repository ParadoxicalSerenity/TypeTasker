import { Parallel, Serial } from "./strategy";
import { TypeTasker, TypeTaskerCallback } from "./main";
import { Logger, LogLevel } from "./logger";

const logLevel: LogLevel = "verbose";

const typeTasker = new TypeTasker({
  logger: { enabled: true, logLevel: logLevel },
});

const logger = new Logger({ enabled: true, logLevel: logLevel });

typeTasker.run(
  new Serial([
    new TypeTaskerCallback({
      name: "test_one",
      callback: async () => {
        logger.info("Hello from job one!");
      },
    }),
    new TypeTaskerCallback({
      name: "test_two",
      callback: () => {
        logger.info("Hello from job two!");
      },
    }),
    new Parallel([
      new TypeTaskerCallback({
        name: "test_three",
        callback: async () => {
          logger.info("Hello from job three!");
        },
      }),
      new TypeTaskerCallback({
        name: "test_four",
        callback: () => {
          logger.info("Hello from job four!");
        },
      }),
    ]),
    new Parallel([]),
  ])
);
