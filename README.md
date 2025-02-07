# Shopping Cart Assignment

This project implements a basic shopping cart service with the following capabilities:
- Add products to the cart.
- Retrieve product prices from a Price API.
- Calculate subtotal, tax, and total for the cart.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **Postman** (for testing API endpoints)

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the price API service by running `npm run serve-products`.
4. Start the shopping cart service by running `node src/index.js`.

## API Endpoints

- `POST /cart/add`: Add a product to the cart.
  - Body: `{ "product": "cornflakes", "quantity": 1 }`
- `GET /cart/summary`: Get the current cart summary.

## Testing

Run unit tests using `npm test`.