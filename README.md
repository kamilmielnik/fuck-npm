# fuck-npm

![Version](https://img.shields.io/github/package-json/v/kamilmielnik/fuck-npm)
![License](https://img.shields.io/npm/l/fuck-npm)
![Node version](https://img.shields.io/node/v/fuck-npm)
![Dependencies](https://img.shields.io/librariesio/github/kamilmielnik/fuck-npm)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/kamilmielnik/fuck-npm)
![Prettier](https://github.com/kamilmielnik/fuck-npm/workflows/Prettier/badge.svg)

## Description
This command line tool will remove `node_modules` directory & run `npm install`. Useful when you're desperate.


### Windows - Source Path Too long
`fuck-npm` has been tested against the following error on Windows:

> The source file name(s) are larger than is supported by the file system.
> Try moving to a location which has a shorter path name, or try renaming
> to shorter name(s) before attempting this operation.

## Installation
```Shell
npm install -g fuck-npm
```

## Usage
```Shell
# go to your project directory
cd ~/projects/my-project

# remove "node_modules", and then run "npm install"
fuck-npm

# remove "node_modules" & "package-lock.json", and then run "npm install"
fuck-npm aslkjdals # pass any parameter (just mash your keyboard!)
```
