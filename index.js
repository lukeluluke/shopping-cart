"use strict"
const program = require('./command')
const fileHelper = require('./helper/fileHelper')
const logHelper = require('./helper/logHelper')
const CartApp = require('./app/cart-app')
const Promise = require('bluebird')

if (program.debug) {
    process.env.debug = true
}

if (!program.cart || !program.price) {
    logHelper.error('Files missing')
    return
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
        logHelper.debug('Start calculate total price')
        const cartApp = new CartApp(data[0], data[1])
        const total = cartApp.total()
        logHelper.info(total + '\n')
    })
    .catch(function (exception) {
        logHelper.error(exception.message)
    })








