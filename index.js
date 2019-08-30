"use strict"
const program = require('./command')
const fileHelper = require('./helper/fileHelper')
const CartApp = require('./app/cart-app')
const Promise = require('bluebird')

if (program.debug) {
    console.log('Debug is enabled')
}

if (!program.cart || !program.price) {
    console.log('Files missing')
}

const promises = [
    fileHelper.readFile(program.cart),
    fileHelper.readFile(program.price)
]

/**
 * Get data from both json files
 */
Promise.all(promises)
    .then(function (data) {
        const cartApp = new CartApp(data[0], data[1])
        cartApp.total()
    })
    .catch(function (exception) {
        console.error(exception)
    })








