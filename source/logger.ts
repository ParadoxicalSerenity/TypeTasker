import winston from "winston";

export interface LoggerContract {
  error: (message: string) => void;
  warn: (message: string) => void;
  info: (message: string) => void;
  verbose: (message: string) => void;
  debug: (message: string) => void;
}

export type LoggerParams = {
  enabled: boolean;
  logLevel: LogLevel;
};

export type LogLevel = "error" | "warn" | "info" | "verbose" | "debug";

export class Logger implements LoggerContract {
  private internalLogger: winston.Logger;
  private enabled: boolean;
  private logLevel: LogLevel;
  private levelMap: Record<string, number> = {
    error: 0 as const,
    warn: 1 as const,
    info: 2 as const,
    verbose: 3 as const,
    debug: 4 as const,
  } as const;

  constructor(params: LoggerParams) {
    this.enabled = params.enabled;
    this.logLevel = params.logLevel;
    this.internalLogger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          ),
          level: params.logLevel,
        }),
      ],
    });
  }
  private shouldLog(logLevel: LogLevel): boolean {
    if (!this.enabled) return false;
    if (this.levelMap[logLevel] <= this.levelMap[this.logLevel]) return true;
    return false;
  }
  error(message: string) {
    if (this.shouldLog("error")) this.internalLogger.error(message);
  }
  warn(message: string) {
    if (this.shouldLog("error")) this.internalLogger.warn(message);
  }
  info(message: string) {
    if (this.shouldLog("error")) this.internalLogger.info(message);
  }
  verbose(message: string) {
    if (this.shouldLog("error")) this.internalLogger.verbose(message);
  }
  debug(message: string) {
    if (this.shouldLog("error")) this.internalLogger.debug(message);
  }
}
