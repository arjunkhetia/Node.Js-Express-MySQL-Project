var winston = require('winston');

var LoggerUtil = {};

var logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize({
        all: true
    }),
    winston.format.printf(
        data => `${data.level} : ${data.message}`
    )
  ),
  transports: [
    new winston.transports.Console({
      level: 'silly'
    }),
    new winston.transports.File({
      level: 'silly',
      filename: './log/ServerData.log'
    })
  ]
});

LoggerUtil.silly = (message) => {
  logger.log('silly', message);
}

LoggerUtil.debug = (message) => {
  logger.log('debug', message);
}

LoggerUtil.verbose = (message) => {
  logger.log('verbose', message);
}

LoggerUtil.info = (message) => {
  logger.log('info', message);
}

LoggerUtil.warn = (message) => {
  logger.log('warn', message);
}

LoggerUtil.error = (message) => {
  logger.log('error', message);
}

module.exports = LoggerUtil;
