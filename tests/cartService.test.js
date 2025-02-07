const CartService = require('../src/cart/cartService');
const { getProductPrice } = require('../src/api/priceApi');

jest.mock('../src/api/priceApi');

describe('CartService', () => {
    let cartService;

    beforeEach(() => {
        cartService = new CartService();
        getProductPrice.mockClear();
    });

    test('addProductToCart adds product correctly', async () => {
        getProductPrice.mockResolvedValue(2.52);
        await cartService.addProductToCart('cornflakes', 1);
        const summary = cartService.getCartSummary();
        expect(summary.items).toHaveLength(1);
        expect(summary.items[0].product).toBe('cornflakes');
        expect(summary.items[0].quantity).toBe(1);
        expect(summary.subtotal).toBe(2.52);
    });

    test('getCartSummary calculates totals correctly', async () => {
        getProductPrice.mockResolvedValueOnce(2.52); // First call: cornflakes
        await cartService.addProductToCart('cornflakes', 2);
    
        getProductPrice.mockResolvedValueOnce(9.98); // Second call: weetabix
        await cartService.addProductToCart('weetabix', 1);
    
        const summary = cartService.getCartSummary();
        expect(summary.subtotal).toBe(15.02); // (2 × 2.52) + (1 × 9.98)
        expect(summary.tax).toBe(1.88); // 12.5% of 15.02
        expect(summary.total).toBe(16.90); // 15.02 + 1.88
    });
});