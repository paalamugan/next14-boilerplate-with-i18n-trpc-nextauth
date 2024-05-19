export interface ILogger {
  log(...messages: unknown[]): void;
  debug(...messages: unknown[]): void;
  error(...messages: unknown[]): void;
  info: (...messages: unknown[]) => void;
}
