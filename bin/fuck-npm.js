#!/usr/bin/env node

const path = require('path');
const argv = require('./cli');
const fuckNpm = require('../index.js');

fuckNpm({
  cwd: process.cwd(),
  removePackageLockJson: Boolean(argv._.length)
});
