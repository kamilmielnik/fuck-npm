const chalk = require('chalk');
const { execSync } = require('child_process');
const del = require('del');
const path = require('path');

const removeDirectory = (filepath) => {
  console.log(`Deleting: ${filepath}`);
  del.sync(filepath);
  console.log(chalk.green(`Deleted: ${filepath}`));
};

const executeCommand = (command) => {
  console.log(`Executing: ${command}`);
  execSync(command);
  console.log(chalk.green(`Executed: ${command}`));
};

module.exports = () => {
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  removeDirectory(nodeModulesPath);
  executeCommand('npm install');
};
