const chalk = require('chalk');
const { execSync } = require('child_process');
const del = require('del');
const path = require('path');

const remove = (filepath) => {
  console.log(chalk.yellow(`Deleting: ${filepath}`));
  del.sync(filepath);
  console.log(chalk.green(`Deleted: ${filepath}`));
};

const execute = (command) => {
  console.log(chalk.yellow(`Executing: ${command}`));
  execSync(command, { stdio: [0, 1, 2] });
  console.log(chalk.green(`Executed: ${command}`));
};

module.exports = ({ cwd, removePackageLockJson }) => {
  const nodeModulesPath = path.join(cwd, 'node_modules');
  const packageLockJsonPath = path.join(cwd, 'package-lock.json');
  remove(nodeModulesPath);
  if (removePackageLockJson) {
    remove(packageLockJsonPath);
  }
  execute('npm install');
};
