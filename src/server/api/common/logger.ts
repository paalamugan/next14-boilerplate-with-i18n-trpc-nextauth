/* eslint-disable no-console */
import { DateTime } from 'luxon';

import pc from '@/server/api/common/pc';
import type { ILogger } from '@/types/logger';

export class Logger implements ILogger {
  constructor(private readonly context: string) {
    this.context = context;
  }

  private static logMessage(
    type: 'log' | 'debug' | 'info' | 'error',
    context: string,
    messages: unknown[],
    colorFn: (s: string) => string
  ): void {
    if (
      process.env.NODE_ENV !== 'production' ||
      type === 'log' ||
      type === 'info' ||
      type === 'error'
    ) {
      const prefix = colorFn(
        `[${type.toUpperCase()} - ${DateTime.now().toLocaleString(
          DateTime.DATETIME_FULL
        )} - ${pc.yellow(context)}]:`
      );
      console.log(prefix, ...messages);
    }
  }

  public log(...messages: unknown[]): void {
    Logger.logMessage('log', this.context, messages, pc.green);
  }

  public debug(...messages: unknown[]): void {
    Logger.logMessage('debug', this.context, messages, pc.orange);
  }

  public error(...messages: unknown[]): void {
    Logger.logMessage('error', this.context, messages, pc.red);
  }

  public info(...messages: unknown[]): void {
    Logger.logMessage('info', this.context, messages, pc.cyan);
  }

  public static log(context: string, ...messages: unknown[]): void {
    this.logMessage('log', context, messages, pc.green);
  }

  public static debug(context: string, ...messages: unknown[]): void {
    this.logMessage('debug', context, messages, pc.orange);
  }

  public static error(context: string, ...messages: unknown[]): void {
    this.logMessage('error', context, messages, pc.red);
  }

  public static info(context: string, ...messages: unknown[]): void {
    this.logMessage('info', context, messages, pc.cyan);
  }
}
