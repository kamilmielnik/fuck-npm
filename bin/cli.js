const yargs = require('yargs');

const { argv } = yargs.usage('$0 [string]').alias('v', 'version').version().help();

module.exports = argv;
