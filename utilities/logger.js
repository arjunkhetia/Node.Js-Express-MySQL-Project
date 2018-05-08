var LoggerUtil = {};
var logger = require('winston');

logger.setLevels({
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
});

logger.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
  verbose: 'cyan',
  debug: 'blue',
  silly: 'magenta'
});

logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, {
  level: 'silly',
  colorize: true
});

LoggerUtil.error = function(data) {
  logger.error(data);
}

LoggerUtil.warn = function(data) {
  logger.warn(data);
}

LoggerUtil.info = function(data) {
  logger.info(data);
}

LoggerUtil.verbose = function(data) {
  logger.verbose(data);
}

LoggerUtil.debug = function(data) {
  logger.debug(data);
}

LoggerUtil.silly = function(data) {
  logger.silly(data);
}

module.exports = LoggerUtil;
