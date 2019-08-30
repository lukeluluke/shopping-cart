"use strict"
const fs = require('fs')
const logHelper = require('./logHelper')

class FileHelper {
    /**
     * Read a json file, and return parsed data
     * @param file
     */
    readFile(file) {
        const targetFile = './data/' + file
        logHelper.debug(`Start read file: ${targetFile}`)
        return new Promise((resolve, reject) => {
            fs.readFile(targetFile, (err, data) => {
                if (err) {
                    logHelper.debug(`Read file error: ${JSON.stringify(err)}`)
                    reject(err)
                } else {
                    resolve(JSON.parse(data))
                }
            })
        })
    }
}

module.exports = new FileHelper()
