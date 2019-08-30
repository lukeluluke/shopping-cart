"use strict"
const fs = require('fs')

class FileHelper {
    /**
     * Read a json file, and return parsed data
     * @param file
     */
    readFile(file) {
        const targetFile = './data/' + file
        return new Promise((resolve, reject) => {
            fs.readFile(targetFile, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(data))
                }
            })
        })
    }
}

module.exports = new FileHelper()
