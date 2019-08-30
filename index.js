"use strict"
const program = require('./command')

if(program.debug) {
    console.log('Debug is enabled')
}

if (!program.cart || !program.price) {
    console.log('Files missing')
}





