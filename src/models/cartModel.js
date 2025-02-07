class Cart {
    constructor() {
        this.items = []; // Initializing an empty array to store cart items
    }

    addItem(product, quantity, price) {
        const existingItem = this.items.find(item => item.product === product);  // Check if the product is already in the cart
        if (existingItem) {
            existingItem.quantity += quantity;  // If the product exists, increase its quantity
        } else {
            this.items.push({ product, quantity, price });
        }
    }

    getSubtotal() {
        return this.items.reduce((total, item) => total + item.quantity * item.price, 0);
    }

    getTax() {
        const subtotal = this.getSubtotal();
        return parseFloat((subtotal * 0.125).toFixed(2));
    }

    getTotal() {
        const subtotal = this.getSubtotal();
        const tax = this.getTax();
        return parseFloat((subtotal + tax).toFixed(2));
    }
}

module.exports = Cart;