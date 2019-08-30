"use strict"
const program = require('commander')

program
    .version('1.0.0')
    .description('Shopping Cart Calculation Tool')
    .option('-d --debug', 'show debug information')
    .option('-c --cart [file name]', 'name of cart json file', '')
    .option('-p --price [file name]', 'name of base price json file', '')
    .parse(process.argv)


module.exports = program
