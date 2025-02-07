const express = require('express');
const CartService = require('./cart/cartService');

const app = express();
const port = 3000;

app.use(express.json());

const cartService = new CartService(); // Creating an instance of CartService to manage cart operations

/**
 * Route to add a product to the cart.
 * Expects a JSON request body with `product` (string) and `quantity` (number).
 * Returns the updated cart summary.
 */

app.post('/cart/add', async (req, res) => {
    const { product, quantity } = req.body;
    await cartService.addProductToCart(product, quantity);
    res.json(cartService.getCartSummary());
});

/**
 * Route to retrieve the current cart summary.
 * Returns the list of cart items, subtotal, tax, and total amount.
 */

app.get('/cart/summary', (req, res) => {
    res.json(cartService.getCartSummary());
});

app.listen(port, () => {
    console.log(`Shopping cart service running on http://localhost:${port}`);
});