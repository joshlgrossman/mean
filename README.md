MEAN Starter Kit
================

Starting point for new MEAN apps.

Includes:
---------
* Express server with user authentication
* Socket.io for WebSockets
* ORM for MySQL/MariaDB - Bookshelf.js
* ODM for MongoDB - Mongoose.js
* Gulp tasks for Babel and LESS compilation
* AngularJS services for `user` and `socket`
* AngularJS template injection
* Shell with extensible command API

Configuration:
-------------------
Create `config.json` or provide command line arguments to override default configuration.

Config.json:

```
{
  "debug": true,
  "port": 3000,
	"secret": "abc@123",
  "ssl": false,
  "ssl_key": "path/to/key",
  "ssl_cert": "path/to/cert",
  "sql_database_host": "localhost",
  "sql_database_user": "root",
  "sql_database_password": "",
  "sql_database_name": "",
  "nosql_database_host": "localhost",
  "nosql_database_user": "root",
  "nosql_database_password": "",
  "nosql_database_name": ""
}
```

Command line arguments:

`npm start debug=true sql_database_password=ABC123`

Configuration precedence: defaults < config.json < command line arguments.

Compilation:
------------
Running default Gulp task will:
* Set up a watcher
* Compile, inject AngularJS templates, and minify front-end JS into `client/build/scripts/app.js`
* Compile and minify LESS into `client/build/styles/styles.css`
* Copy and minify HTML into `client/index.html`

Databases:
----------
Includes support and ORM/ODM for MySQL/MariaDB and MongoDB.  Run `initialize.sql` to initialize database.

Use `config.json` or command line arguments to specify host, username, password, database name.

Shell:
------
The shell is a command line interface while the server is running.  It has built-in commands for querying the SQL and NoSQL databases.
It also has commands for server up-time, current configuration settings, and more.  Use the `help` command to see all that is available.

To run the application without the shell, add a command line argument of `no-shell`.
