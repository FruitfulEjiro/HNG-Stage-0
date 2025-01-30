# HNG-Stage-0

## Project Description
This is a simple public API developed for the HNG12 Internship, designed to return essential information in JSON format. The API provides the following details:

1. My email address.
2. The current date and time in ISO 8601 format.
3. The GitHub URL of the project’s codebase.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

## API Documentation

-  **Endpoint URL**: `GET /api/me`
-  **Request Format**: No specific request body.
-  **Response Format**:
   ```json
   {
      "email": "fruitful186@gmail.com",
      "current_datetime": "2025-01-30T12:00:00Z",
      "github_url": "https://github.com/FruitfulEjiro/HNG-Stage-0"
   }
   ```
-  **Example Usage**:
   -  You can test the API by sending a GET request to `http://localhost:3000/api/me`.

## Backlink

-  [Hire NodeJS Developers](https://hng.tech/hire/nodejs-developers)
