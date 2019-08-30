const CartApp = require('../app/cart-app')

describe('CartApp', () => {

    const products = [
        {
            "product-type": "hoodie",
            "options": {
                "size": "small",
                "colour": "white",
                "print-location": "front"
            },
            "artist-markup": 20,
            "quantity": 1
        }
    ];

    const products2 = [
        {
            "product-type": "hoodies-test",
            "options": {
                "size": "small",
                "colour": "white",
                "print-location": "front"
            },
            "artist-markup": 20,
            "quantity": 1
        }
    ];

    const products3 = [
        {
            "product-type": "hoodies",
            "options": {
                "size": "test",
                "colour": "white",
                "print-location": "front"
            },
            "artist-markup": 20,
            "quantity": 1
        }
    ];

    const productPrices = [
        {
            "product-type": "hoodie",
            "options": {
                "colour": ["white", "dark"],
                "size": ["small", "medium"]
            },
            "base-price": 3800
        },
        {
            "product-type": "sticker",
            "options": {
                "size": ["small"]
            },
            "base-price": 221
        }
    ]

    test('it can be instantiated ', function () {
        const cartApp = new CartApp([], []);
        expect(cartApp).not.toBe(null);
    });

    test('should have correct total', function () {
        const cartApp = new CartApp(products, productPrices);
        const total = cartApp.total();
        expect(total).toBe(4560)
    });

    test('should have error', function () {
        const cartApp = new CartApp(products2, productPrices);
        expect(() => {
            cartApp.total()
        }).toThrow();
    });

    test('should have error', function () {
        const cartApp = new CartApp(products3, productPrices);
        expect(() => {
            cartApp.total()
        }).toThrow();
    });

    test('should get correct product total price', function () {
        const cartApp = new CartApp([], []);
        const productTotal = cartApp.calculateProductTotal(1000, 20, 2);
        expect(productTotal).toBe(2400)
    });
})
