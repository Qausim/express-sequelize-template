import chalk from 'chalk';
import { debug as createDebugger } from 'debug';

export const getDebugger = (namespace) => createDebugger(namespace);

export const debugHelper = (debug) => ({
  error: (error) => debug(chalk.red(error.message)),
  success: (msg) => debug(chalk.green(msg)),
  custom: (msg, color = 'white') => debug(chalk[color](msg)),
});
