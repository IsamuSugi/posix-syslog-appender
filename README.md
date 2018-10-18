posix-syslog-appender
=======
An appender for printing log to syslog using log4js.

log4jsを使ってsyslogにlogを出力するためのappenderです。

## Installation

```bash
$ npm install posix-syslog-appender --save
```

## Example

```js
import log4js from 'log4js';

log4js.configure({
  appenders: {
    syslog: {
      type: 'posix-syslog-appender',
      tag: 'myApp',
      facility: 'local0',
    },
  },
  categories: {
    development: {
      appenders: ['syslog'],
      level: 'all',
    },
  },
});

const log = log4js.getLogger('development');

log.info('message for you.');
```

## License

[MIT](./LICENSE)
