class LogHelper {
    info(msg) {
        console.log(`[INFO] : ${msg}`)
    }

    error(msg) {
        console.error(`[ERROR] : ${msg}`)
    }

    debug(msg) {
        if (process.env.debug) {
            console.debug(`[DEBUG] : ${msg}`)
        }
    }
 }

module.exports = new LogHelper()
