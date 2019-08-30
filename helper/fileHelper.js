"use strict"
const fs = require('fs')

class FileHelper {
    /**
     * Read a json file, and return parsed data
     * @param file
     */
    readFile(file) {
        const targetFile = './data/' + file
        fs.readFile(targetFile, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(JSON.parse(data))
            }
        })
    }
}

module.exports = new FileHelper()
