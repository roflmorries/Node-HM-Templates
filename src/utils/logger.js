import winston from 'winston';
import chalk from 'chalk';

const customFormat = winston.format.printf(({ level, message }) => {
  if (level === 'info') return chalk.blue(message);
  if (level === 'error') return chalk.red(message);
  if (level === 'warn') return chalk.yellow(message);
  return message;
});

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        customFormat
      )
    })
  ]
});

export default logger;