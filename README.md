# Node-Express-MySQL Project   ![Version][version-image]

![Linux Build][linuxbuild-image]
![Windows Build][windowsbuild-image]
![NSP Status][nspstatus-image]
![Test Coverage][coverage-image]
![Dependency Status][dependency-image]
![devDependencies Status][devdependency-image]

The quickest way to get start with Node.Js, Express & MySQL, just clone the project:

```bash
$ git clone https://github.com/arjunkhetia/Node.Js-Express-Project.git
```

Install dependencies:

```bash
$ npm install
```

Start Express.js app at `http://localhost:3000/`:

```bash
$ npm start
```

# Nodemon

Nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

Start Express.js app with nodemon at `http://localhost:3000/`:

```bash
$ nodemon bin/www
```

# Logger - Morgan & Winston

Morgan - HTTP request logger middleware for node.js:

```js
var logger = require('morgan');
app.use(logger('dev'));
```

Winston - is designed to be a simple and universal logging library with support for multiple transports:

```js
var logger = require('winston');
```

# Rotating File Stream

To provide an automated rotation of Express/Connect logs or anything else that writes to a log on a regular basis that needs to be rotated based on date.

```js
var rfs    = require('rotating-file-stream');
var stream = rfs('file.log', {
    size:     '10M', // rotate every 10 MegaBytes written
    interval: '1d',  // rotate daily
    compress: 'gzip' // compress rotated files
});
```

# MySQL Database Connectivity (with connection pool)

This is a node.js driver for mysql. Also implemented the connection pool, it is a cache of database connections maintained so that the connections can be reused when future requests to the database are required. Connection pools are used to enhance the performance of executing commands on a database.

```js
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 50, // The maximum number of connections to create at once. (Default: 10)
  queueLimit: 100, // The maximum number of connection requests the pool will queue before returning an error from getConnection. (Default: 0)
  host : '127.0.0.1', // The hostname of the database you are connecting to. (Default: localhost)
  port : 3306, // The port number to connect to. (Default: 3306)
  user : 'arjun', // The MySQL user to authenticate as.
  password : '', // The password of that MySQL user.
  database : 'mysqldb', // Name of the database to use for this connection.
  connectTimeout : 10000, // The milliseconds before a timeout occurs during the initial connection to the MySQL server. (Default: 10000)
  waitForConnections: true, // Determines the pool's action when no connections are available and the limit has been reached. (Default: true)
  acquireTimeout: 10000, // The milliseconds before a timeout occurs during the connection acquisition. (Default: 10000)
  debug : false // Prints protocol details to stdout. (Default: false)
});
```

[version-image]: https://img.shields.io/badge/Version-1.0.0-orange.svg
[linuxbuild-image]: https://img.shields.io/badge/Linux-passing-brightgreen.svg
[windowsbuild-image]: https://img.shields.io/badge/Windows-passing-brightgreen.svg
[nspstatus-image]: https://img.shields.io/badge/nsp-no_known_vulns-blue.svg
[coverage-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[dependency-image]: https://img.shields.io/badge/dependencies-up_to_date-brightgreen.svg
[devdependency-image]: https://img.shields.io/badge/devdependencies-up_to_date-yellow.svg
