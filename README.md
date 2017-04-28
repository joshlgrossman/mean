MEAN Starter Kit
================

Starting point for new MEAN apps.

Includes:
---------
* Express server with user authentication
* Babel and LESS compilation
* AngularJS services for `$user` and `$socket`

Configuration:
-------------------
Create `config.json` or provide command line arguments to override default configuration.

```{
  "debug": true,
  "port": 3000,
  "secret": "secret",
  "database": "{{username}}:{{password}}@mydatabase",
  "username": "Test",
  "password": "password",
  "ssl": false,
  "cert": "path/to/cert",
  "key": "path/to/key"
}```

Configuration precedence: defaults < config.json < command line arguments.

Compilation:
------------
Running default Gulp task will:
* Compile and minify Babel into `client/build/scripts/app.js`
* Compile and minify LESS into `client/build/styles/styles.css`
* Copy and minify HTML into `client/index.html`
