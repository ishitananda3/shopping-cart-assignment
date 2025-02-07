const axios = require('axios');

const PRICE_API_BASE_URL = 'http://localhost:3001';

async function getProductPrice(productName) {
    try {
        const response = await axios.get(`${PRICE_API_BASE_URL}/products/${productName}`);  // Sending a GET request to fetch the product price from the API
        return response.data.price;  // Returning the price data extracted from the API response
    } catch (error) {
        console.error(`Error fetching price for ${productName}:`, error);
        throw error;
    }
}

module.exports = { getProductPrice };