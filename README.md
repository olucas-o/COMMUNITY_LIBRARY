<<<<<<< HEAD
# Community Library - Backend

## Description

The **Community Library** project is a backend system designed to manage book records and user interactions in a community library. It processes data before storing it in the database, ensuring data consistency and integrity.

## Features

- Automated email reminders for upcoming due dates

- User registration and authentication
- Book catalog management (add, update, delete books)
- Borrowing and returning system with email reminders for due dates
- Data validation and processing before database storage
- API endpoints for seamless integration

- User registration and authentication
- Book catalog management (add, update, delete books)
- Borrowing and returning system
- Data validation and processing before database storage
- API endpoints for seamless integration

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- Database system (SQLite3, or other compatible databases)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/olucas-o/COMMUNITY_LIBRARY.git
   ```
2. Navigate to the project directory:
   ```bash
   cd COMMUNITY_LIBRARY
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables (e.g., database credentials) in `.env` file.
5. Run database migrations (if applicable).
6. Start the server:
   ```bash
   npm start
   ```

## Dependencies

The project uses the following Node.js libraries:

- **dotenv** - Loads environment variables from a `.env` file
- **express** - Web framework for building the API
- **jsonwebtoken** - Handles authentication with JWT tokens
- **moment** - Parses and formats dates easily
- **node-cron** - Schedules tasks at specific intervals
- **nodemailer** - Sends emails from the application
- **nodemon** - Automatically restarts the server during development
- **sqlite3** - Database driver for SQLite
- **zod** - Schema validation for request data

## Usage

- API endpoints are available for book management, user authentication, and borrowing transactions.
- Use Postman or a similar tool to test API requests.
- Example API request:
  ```bash
  curl -X GET http://localhost:3000/books
  ```

## Contribution

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, reach out to [**lucas.ornelas.dev@gmail.com**](mailto\:your.email@example.com).