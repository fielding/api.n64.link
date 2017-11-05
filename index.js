require = require('@std/esm')(module, { esm: 'js', cjs: true });
const clear = require('cli-clear');
const chalk = require('chalk');
const app = require('./src/app').default;

const port = 3040;

app.listen(port);

clear();
console.log(chalk`{reset The api is running at:

  {cyan.bold http://localhost:${port}/} }`);
