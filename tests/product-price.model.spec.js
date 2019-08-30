const ProductPrice = require('../models/product-price.model')
describe('ProductPrice', () => {
    const productOptions = [
        {
            'size': 'small',
            'color': 'white',
            'print-location': 'front'
        },

        {
            'size': 'smalls',
            'color': 'white',
            'print-location': 'front'
        }
    ];

    const productPrice = new ProductPrice('Test Product', {
        'size' : 'small',
        'color': 'white'
    })

    test('it can be instantiated ', function () {
        const productPrice = new ProductPrice();
        expect(productPrice).not.toBe(null);
    });

    test('should match option ', function () {
        expect(productPrice.matchOptions(productOptions[0])).toBe(true)
    });

    test('should not match option ', function () {
        expect(productPrice.matchOptions(productOptions[1])).toBe(false)
    });
})
