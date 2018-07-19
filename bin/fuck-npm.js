#!/usr/bin/env node

const path = require('path');
const fuckNpm = require('../index.js');

const executablePathSuffix = path.join('fuck-npm', 'bin', 'fuck-npm.js');
const executableArgvIndex = process.argv.findIndex((arg) => arg.endsWith(executablePathSuffix));

fuckNpm({
  cwd: process.cwd(),
  removePackageLockJson: process.argv.length > executableArgvIndex + 1
});
