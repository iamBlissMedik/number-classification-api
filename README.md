
# Number Classification API

## Overview

This API, built with **Express.js** and **TypeScript**, accepts a number and returns its interesting mathematical properties along with a fun fact. The properties include whether the number is prime, perfect, or an Armstrong number, as well as other basic properties like whether the number is odd or even. Additionally, the API fetches a fun fact about the number from the Numbers API.

## Features

- **Mathematical Properties**:
  - Prime number check (`is_prime`)
  - Perfect number check (`is_perfect`)
  - Armstrong number check (`armstrong`)
  - Odd/Even check
  - Digit sum (`digit_sum`)

- **Fun Fact**: A fun fact about the number fetched from [Numbers API](http://numbersapi.com/#42).

- **Error Handling**: Handles invalid inputs with appropriate error messages and HTTP status codes (400 Bad Request).

## Requirements

- **Node.js** version 16.x or higher
- **TypeScript**
- **Express.js**
- **CORS Middleware**
- **Axios** (for making HTTP requests to Numbers API)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/iamBlissMedik/number-classification-api.git
   ```

2. Navigate to the project folder:
   ```bash
   cd number-classification-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the API:
   ```bash
   npm start
   ```

The server will start and be accessible at `http://localhost:3000`.

## API Endpoints

### `GET /api/classify-number?number=<number>`

This endpoint accepts a `number` query parameter and returns the following JSON response:

#### Successful Response (200 OK):

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### Error Response (400 Bad Request):

```json
{
  "number": "alphabet",
  "error": true
}
```

### Parameters:

- `number` (required): A valid integer for which the mathematical properties will be classified.

## Development

### To run tests (if applicable):

1. Install testing dependencies:
   ```bash
   npm install --save-dev jest @types/jest ts-jest
   ```

2. Add test scripts to `package.json`.

3. Run tests:
   ```bash
   npm test
   ```

### Code Quality

- **Error Handling**: Gracefully handles errors and validates inputs to ensure the API operates correctly and returns appropriate error messages.
- **Code Structure**: The code is organized with clear separation of concerns, with functions for classification, error handling, and fetching fun facts.

## Deployment

- The API is deployed to a publicly accessible endpoint [Render].

## License

MIT License. See [LICENSE](LICENSE) for more details.

## Contact

For any questions or issues, feel free to open an issue or contact me at [ellamsbliss@gmail.com](mailto:ellamsbliss@gmail.com).
