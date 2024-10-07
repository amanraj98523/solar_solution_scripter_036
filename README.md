# Polling Arena

## Introduction

Polling Arena is a dynamic polling platform that allows users to create polls using templates and can view results through various graphs, including bar, radar, and pie charts.

## Project Type

Fullstack

## Deplolyed App

Frontend: https://pollingarena.netlify.app/<br/>
Backend: https://pollingarena.netlify.app/ <br/>

## Directory Structure

# solor_solution_scripter_036

- [Backend/](./solor_solution_scripter_036/Backend)
  - [configs/](./solor_solution_scripter_036/Backend/configs)
  - [controllers/](./solor_solution_scripter_036/Backend/controllers)
  - [middlewares/](./solor_solution_scripter_036/Backend/middlewares)
  - [models/](./solor_solution_scripter_036/Backend/models)
  - [node_modules/](./solor_solution_scripter_036/Backend/node_modules)
  - [routes/](./solor_solution_scripter_036/Backend/routes)
  - [utils/](./solor_solution_scripter_036/Backend/utils)
  - [.env](./solor_solution_scripter_036/Backend/.env)
  - [.gitignore](./solor_solution_scripter_036/Backend/.gitignore)
  - [package-lock.json](./solor_solution_scripter_036/Backend/package-lock.json)
  - [package.json](./solor_solution_scripter_036/Backend/package.json)
  - [server.js](./solor_solution_scripter_036/Backend/server.js)
- [frontend/](./solor_solution_scripter_036/frontend)
  - [dist/](./solor_solution_scripter_036/frontend/dist)
  - [node_modules/](./solor_solution_scripter_036/frontend/node_modules)
  - [public/](./solor_solution_scripter_036/frontend/public)
  - [src/](./solor_solution_scripter_036/frontend/src)
  - [styles/](./solor_solution_scripter_036/frontend/styles)
  - [.gitignore](./solor_solution_scripter_036/frontend/.gitignore)
  - [README.md](./solor_solution_scripter_036/frontend/README.md)
  - [eslint.config.js](./solor_solution_scripter_036/frontend/eslint.config.js)
  - [index.html](./solor_solution_scripter_036/frontend/index.html)
  - [package-lock.json](./solor_solution_scripter_036/frontend/package-lock.json)
  - [package.json](./solor_solution_scripter_036/frontend/package.json)
  - [vite.config.js](./solor_solution_scripter_036/frontend/vite.config.js)
- [README.md](./solor_solution_scripter_036/README.md)

## Video Walkthrough of the project

## Features

- **User Authentication**: Secure login and registration system.
- **Poll Creation**: Create multiple types of polls (MCQ, Quiz, Rating Scale, True/False).
- **Real-time Updates**: Live updates of poll results using WebSockets.
- **Role-based Access Control**: Different roles such as admin, poll creator, and normal user.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Visualization**: Visual representation of poll results using charts and graphs.

## Installation & Getting started

Follow these steps to set up and run the project locally:

```bash
git clone https://github.com/amanraj98523/solar_solution_scripter_036.git
cd solar_solution_scripter_036
```

# Usage Guide

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

Node.js (version 14 or higher)
NPM (Node Package Manager, comes with Node.js)
MongoDB (either installed locally or using MongoDB Atlas)
Installation

1. Clone the Repository
   Begin by cloning the repository to your local machine:

2. Install Backend Dependencies
   Navigate to the backend directory and install the necessary dependencies:

```bash

cd backend
npm install
```

3. Install Frontend Dependencies
   Next, move to the frontend directory and install the necessary dependencies:

```bash

cd ../frontend
npm install
```

Configuration

1. Environment Variables
   For the backend, create a .env file in the backend directory with the following content:

```plaintext
MONGO_URL=mongodb://localhost:27017/Quiz
PORT=3200

JWT_SECRET=446e2f15c937aeb594a24c17eb13e43984b832efbab587b06089b1a6032cd1b1899e3c5f4805d9f044f431901894c1def62cd1ebddc67428ecd1030a79ecfae58c7f14d95425b3e2b759eeb645ab9b4dd929b1d7a88174c4099db8c0a4dc6d730836228255c67933e67a8eb26fbaf49174447164b4d4a6376959cec70f6f77e1

JWT_REFRESH_SECRET=4f090bdb5d9a381467d439b7e8e24f0691ea16a1e73357f886cdef751a1fca50

SESSION_SECRET=y9g"b/Y-9^:|g6L

NODE_ENV = development
```

Explanation:

PORT: Specifies the port on which your backend server will run.<br/>
MONGO_URL: Your MongoDB Atlas connection string.<br/>
JWT_SECRET: Secret key used to sign JWT tokens.<br/>
JWT_REFRESH_SECRET: Secret key used to sign JWT refresh tokens.<br/>
SESSION_SECRET: Secret key used for session management.<br/>

Frontend:

No environment variables are needed for the frontend based on your current setup.
Running the Application

1. Start the Backend
   Open a terminal window, navigate to the backend directory, and start the backend server:

```bash

cd backend
npm start
```

The backend server will be running on http://localhost:2300.

2. Start the Frontend
   In a new terminal window, navigate to the frontend directory and start the frontend development server:

```bash

cd frontend
npm run dev
```

```bash

mongo
```

API Testing
Use tools like Postman or cURL to test API endpoints. This allows you to send requests to your backend and view responses, helping you verify that your API is functioning as expected.
Include screenshots as necessary.

## Credentials

For Admin Page You can login by admin@gmail.com password:ad.

## API Endpoints

### Authentication

1. **Register User**

   - **HTTP Method:** `POST`
   - **Path:** `/register`
   - **Request Body:**
     ```json
     {
       "name": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Description:** Registers a new user. The request must include the user's name, email, and password. The password is hashed before saving.
   - **Responses:**
     - **201 Created:** Successful registration.
       ```json
       {
         "msg": "Register successful",
         "data": {
           "name": "string",
           "email": "string",
           "password": "hashed_string"
         }
       }
       ```
     - **400 Bad Request:** User already exists or invalid request data.
     - **500 Internal Server Error:** An error occurred during registration.

2. **Login User**

   - **HTTP Method:** `POST`
   - **Path:** `/login`
   - **Request Body:**
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - **Description:** Authenticates a user and returns access and refresh tokens. The request must include the user's email and password.
   - **Responses:**
     - **200 OK:** Successful login.
       ```json
       {
         "message": "Login successful",
         "accessToken": "string",
         "refreshToken": "string"
       }
       ```
     - **400 Bad Request:** Incorrect password or user does not exist.
     - **500 Internal Server Error:** An error occurred during login.

3. **Logout User**

   - **HTTP Method:** `POST`
   - **Path:** `/logout`
   - **Description:** Logs out a user by clearing the refresh token. The refresh token is expected to be in the cookies.
   - **Responses:**
     - **200 OK:** Successful logout.
       ```json
       {
         "message": "User logged out successfully"
       }
       ```
     - **400 Bad Request:** Refresh token is missing.
     - **404 Not Found:** User not found.
     - **500 Internal Server Error:** An error occurred during logout.

4. **Refresh Access Token**

   - **HTTP Method:** `POST`
   - **Path:** `/token`
   - **Description:** Generates a new access token using the refresh token from cookies.
   - **Responses:**
     - **200 OK:** Successful token refresh.
       ```json
       {
         "message": "Token refreshed"
       }
       ```
     - **401 Unauthorized:** No token provided or invalid token.
     - **400 Bad Request:** Token refresh failed.

5. **Get All Users**

   - **HTTP Method:** `GET`
   - **Path:** `/allusers`
   - **Description:** Retrieves a list of all registered users.
   - **Responses:**
     - **200 OK:** Successful retrieval of users.
       ```json
       [
         {
           "_id": "string",
           "name": "string",
           "email": "string",
           "password": "hashed_string"
         },
         ...
       ]
       ```
     - **500 Internal Server Error:** An error occurred while fetching users.

6. **Get User by ID**

   - **HTTP Method:** `GET`
   - **Path:** `/user/:id`
   - **Path Parameters:**
     - `id` (string): The ID of the user to retrieve.
   - **Description:** Retrieves a specific user by their ID.
   - **Responses:**
     - **200 OK:** Successful retrieval of the user.
       ```json
       {
         "_id": "string",
         "name": "string",
         "email": "string",
         "password": "hashed_string"
       }
       ```
     - **404 Not Found:** User not found.

7. **Update User by ID**

   - **HTTP Method:** `PATCH`
   - **Path:** `/user/:id`
   - **Path Parameters:**
     - `id` (string): The ID of the user to update.
   - **Request Body:**
     ```json
     {
       "name": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Description:** Updates user information (name, email, password) based on their ID.
   - **Responses:**
     - **200 OK:** Successful update of user information.
       ```json
       {
         "_id": "string",
         "name": "string",
         "email": "string"
       }
       ```
     - **404 Not Found:** User not found.
     - **500 Internal Server Error:** An error occurred during the update.

8. **Delete User by ID**
   - **HTTP Method:** `DELETE`
   - **Path:** `/user/:id`
   - **Path Parameters:**
     - `id` (string): The ID of the user to delete.
   - **Description:** Deletes a specific user by their ID.
   - **Responses:**
     - **200 OK:** Successful deletion of the user.
       ```json
       {
         "message": "Customer deleted successfully"
       }
       ```
     - **404 Not Found:** User not found.
     - **500 Internal Server Error:** An error occurred during deletion.

## Technologies Used

- **Frontend**: React, Chakra UI
- **Backend**: Node.js, Express.js, npm Packeges
