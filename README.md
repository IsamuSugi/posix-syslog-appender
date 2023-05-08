# posix-syslog-appender

An appender for printing log to syslog using log4js.

log4js を使って syslog に log を出力するための appender です。

## Installation

```bash
$ npm install posix-syslog-appender --save
```

## Example

```js
import log4js from "log4js";

log4js.configure({
  levels: {
    NOTICE: { value: 21000, colour: "green" },
    CRIT: { value: 51000, colour: "magenta" },
    ALERT: { value: 52000, colour: "magenta" },
    EMERG: { value: 53000, colour: "magenta" },
  },
  appenders: {
    syslog: {
      type: "posix-syslog-appender",
      tag: "myApp",
      facility: "local0",
    },
  },
  categories: {
    development: {
      appenders: ["syslog"],
      level: "all",
    },
  },
});

const log = log4js.getLogger("development");

log.info("message for you.");
```

## License

[MIT](./LICENSE)
