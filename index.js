const chalk = require('chalk');
const { execSync } = require('child_process');
const del = require('del');
const path = require('path');

const removeDirectory = (filepath) => {
  console.log(chalk.yellow(`Deleting: ${filepath}`));
  del.sync(filepath);
  console.log(chalk.green(`Deleted: ${filepath}`));
};

const executeCommand = (command) => {
  console.log(chalk.yellow(`Executing: ${command}`));
  execSync(command, { stdio: [ 0, 1, 2 ] });
  console.log(chalk.green(`Executed: ${command}`));
};

module.exports = () => {
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  removeDirectory(nodeModulesPath);
  executeCommand('npm install');
};
