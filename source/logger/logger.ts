import winston from "winston";

export function getLogger(logLevel: string) {
  return winston.createLogger({
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
        level: logLevel,
      }),
    ],
  });
}
