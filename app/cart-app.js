const Product = require('../models/product.model')
const ProductPrice = require('../models/product-price.model')

class CartApp {
    constructor(products, prices) {
        console.log('Initialize models from json data')
        const $this = this
        this.products = []
        this.basePrices = []
        products.forEach(function (item) {
            $this.products.push(
                new Product(item['product-type'], item['options'], item['artist-markup'], item['quantity'])
            )
        })

        prices.forEach(function (item) {
            $this.basePrices.push(
                new ProductPrice(item['product-type'], item['options'], item['base-price'])
            )
        })
    }

    /**
     * Get total price of products
     */
    total() {
        console.log('Get total price')
        let total = 0
        const $this = this
        this.products.forEach(function (product) {
            const basePrice = $this.basePrices.filter(function (price) {
                return (price.productType === product.productType
                    && price.matchOptions(product.options)
                )
            })

            if (basePrice.length === 0) {
                /**
                 * Can not find product with matched base price
                 */
                throw new Error(`Unknown product ${product.productType} with options ${JSON.stringify(product.options)}`)
            }

            total += $this.calculateProductTotal(basePrice[0].basePrice, product.artistMarkup, product.quantity)
        })

        console.log('Total price is ' + total)
    }


    /**
     * Get total price for a  product
     * @param basePrice
     * @param markup
     * @param quantity
     * @returns {*}
     */
    calculateProductTotal(basePrice, markup, quantity) {
        return (basePrice + Math.round(basePrice * markup / 100)) * quantity
    }
}

module.exports = CartApp
