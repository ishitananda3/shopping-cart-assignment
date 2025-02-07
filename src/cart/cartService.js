const Cart = require('../models/cartModel'); // Importing the Cart model to manage cart operations
const { getProductPrice } = require('../api/priceApi');

class CartService {
    constructor() {
        this.cart = new Cart();
    }

    async addProductToCart(product, quantity) {
        const price = await getProductPrice(product);  // Fetch the latest product price from the API
        this.cart.addItem(product, quantity, price);  // Add the product to the cart with the retrieved price
    }

    getCartSummary() {
        return {
            items: this.cart.items,
            subtotal: this.cart.getSubtotal(),
            tax: this.cart.getTax(),
            total: this.cart.getTotal()
        };
    }
}

module.exports = CartService;