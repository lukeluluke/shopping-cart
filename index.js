"use strict"
const program = require('./command')
const fileHelper = require('./helper/fileHelper')

if(program.debug) {
    console.log('Debug is enabled')
}

if (!program.cart || !program.price) {
    console.log('Files missing')
}

fileHelper.readFile(program.cart)

fileHelper.readFile(program.price)





