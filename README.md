# fuck-npm
## Description
This command line tool will remove `node_modules` directory & run `npm install`. Useful when you're desperate.
Additionally, this has been tested against the following error on Windows:

> The source file name(s) are larger than is supported by the file system. > Try moving to a location which has a shorter path name, or try renaming > to shorter name(s) before attempting this operation

## Installation
```
npm install -g fuck-npm
```

## Usage
Change your current working directory to your repository directory, eg.
```
cd ~/projects/my-project
```
Run `fuck-npm`
```
fuck-npm
```
