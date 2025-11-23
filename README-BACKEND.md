# Backend Setup Instructions

This project now includes a backend server to handle:
1.  **Book a Site Visit** form submissions (sending emails and storing in MongoDB).
2.  **Gallery** project data (fetching from MongoDB).

## Prerequisites

1.  **Node.js**: Ensure you have Node.js installed.
2.  **MongoDB**: You need a MongoDB connection string (URI). If you don't have one, you can create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas/database).
3.  **Email Account**: You need an email account (e.g., Gmail) to send emails. If using Gmail, you might need to create an "App Password".

## Setup Steps

1.  **Navigate to the server directory**:
    ```bash
    cd server
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    -   Rename `.env.example` to `.env`.
    -   Open `.env` and fill in your details:
        -   `MONGODB_URI`: Your MongoDB connection string.
        -   `EMAIL_USER`: Your email address (e.g., `yourname@gmail.com`).
        -   `EMAIL_PASS`: Your email password or App Password.
        -   `ADMIN_EMAIL`: The email address where you want to receive site visit requests.

4.  **Seed the Database (Optional)**:
    -   To populate the gallery with initial data, run:
        ```bash
        npm run seed
        ```

5.  **Run the Server**:
    ```bash
    npm start
    ```
    The server will start on `http://localhost:5000`.

## Frontend Integration

The frontend is already configured to talk to `http://localhost:5000`.
-   **Gallery Page**: Fetches projects from `/api/projects`.
-   **Book Site Visit Page**: Sends form data to `/api/site-visits`.

## Troubleshooting

-   **CORS Errors**: If you see CORS errors in the browser console, ensure the backend is running and the `cors` middleware is enabled (it is by default).
-   **Email Errors**: If emails are not sending, check your `EMAIL_USER` and `EMAIL_PASS`. For Gmail, you often need to enable "Less Secure Apps" or generate an App Password.
