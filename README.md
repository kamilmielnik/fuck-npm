# fuck-npm

![Version](https://img.shields.io/github/package-json/v/kamilmielnik/fuck-npm)
![License](https://img.shields.io/npm/l/fuck-npm)
![Node version](https://img.shields.io/node/v/fuck-npm)
![Dependencies](https://img.shields.io/librariesio/github/kamilmielnik/fuck-npm)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/kamilmielnik/fuck-npm)
![Prettier](https://github.com/kamilmielnik/fuck-npm/workflows/Prettier/badge.svg)

## Description
This command line tool will remove `node_modules` directory & run `npm install`. Useful when you're desperate.

Additionally, this has been tested against the following error on Windows:

> The source file name(s) are larger than is supported by the file system.
> Try moving to a location which has a shorter path name, or try renaming
> to shorter name(s) before attempting this operation.

## Installation
```
npm install -g fuck-npm
```

## Usage
1. Change your current working directory to your repository directory, e.g.
```Shell
cd ~/projects/my-project
```
2. Run `fuck-npm`
```Shell
fuck-npm
```
3. Relax

### Frenzy mode
When you're really desperate you may also want to get rid of `package-lock.json`. To do that, simply pass **any** parameter to the tool, e.g.
```Shell
fuck-npm asohdiq3iuoye
```
