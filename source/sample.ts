import { Parallel, Serial } from "./strategy";
import { TypeTasker, TypeTaskerCallback } from "./main";
import { Logger, LogLevel } from "./logger";

const logLevel: LogLevel = "debug";

const typeTasker = new TypeTasker({
  logger: { enabled: true, logLevel: logLevel },
});

async function wasteTime(orgin: string) {
  logger.verbose(`Wasting Type for ${orgin}...`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  logger.verbose(`Wasting Type for ${orgin} done!`);
}

const logger = new Logger({ enabled: true, logLevel: logLevel });

typeTasker.run(
  new Serial([
    new TypeTaskerCallback({
      name: "test_one",
      callback: async () => {
        await wasteTime("Job One");
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
          await wasteTime("Job Three");

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
