const posix = require('posix');

const prio = {
  ALL: 'debug',
  TRACE: 'debug',
  DEBUG: 'debug',
  INFO: 'info',
  NOTICE: 'notice', // It is not defined in log4js
  WARN: 'warning',
  ERROR: 'err',
  FATAL: 'crit',
  CRIT: 'crit', // It is not defined in log4js
  ALERT: 'alert', // It is not defined in log4js
  EMERG: 'emerg', // It is not defined in log4js
  MARK: 'emerg',
  OFF: '',
};

function syslogAppender(layout, timezoneOffset) {
  return (loggingEvent) => {
    posix.syslog(prio[loggingEvent.level.levelStr], layout(loggingEvent, timezoneOffset));
  };
}

function configure(config, layouts) {
  posix.openlog(config.tag, { cons: true, ndelay: true, pid: true }, config.facility);

  let layout = layouts.basicLayout;
  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout);
  }

  const appender = syslogAppender(
    layout,
    config.timezoneOffset,
  );

  appender.shutdown = () => {
    posix.closelog();
  };

  return appender;
}

module.exports.configure = configure;
