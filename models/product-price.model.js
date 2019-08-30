const _ = require('lodash')
class ProductPrice {
    constructor(productType, options, basePrice) {
        this.productType = productType
        this.options = options
        this.basePrice = basePrice
    }

    /**
     * Check if price options match product's options
     * @returns {boolean}
     */
    matchOptions(productOptions) {
        let match = true
        _.forEach(this.options, function (values, key) {
            if (_.isUndefined(productOptions[key]) || !_.includes(values, productOptions[key])) {
                match = false
                return false
            }
        })
        return match
    }
}

module.exports = ProductPrice
