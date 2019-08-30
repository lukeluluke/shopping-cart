const Product = require('../models/product.model')

describe('Product', () => {
    test('it can be instantiated ', function () {
        const product = new Product();
        expect(product).not.toBe(null);
    });
})
