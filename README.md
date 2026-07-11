# Email OTP Authentication API

A secure and scalable Authentication REST API built with **Node.js**, **Express.js**, and **MongoDB**. This project implements JWT-based authentication with Email OTP verification, Refresh Tokens, and session management following modern backend development practices.

# Features

- User Registration
- Email Verification using 6-Digit OTP
- Secure Password Hashing
- JWT Access Token Authentication
- Refresh Token Authentication
- User Login
- User Logout
- Logout from All Devices
- Protected Routes
- RESTful API Architecture
- MongoDB Database Integration
- Nodemailer Email Service

  ## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Nodemailer
- OAuth2 (Gmail)
- Crypto
- dotenv

---

## 📁 Project Structure
```
email-otp-authentication-api/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.js
│
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/verify-email` | Verify email using OTP |
| POST | `/login` | Login user |
| POST | `/refresh-token` | Generate a new access token |
| POST | `/logout` | Logout current session |
| POST | `/logout-all` | Logout from all devices |
| POST | `/Forgot Password` | Forgot Password |

---


## Security Features

- Password Hashing
- Forgot Password
- OTP Hashing
- Email Verification
- JWT Authentication
- Refresh Token Rotation
- Session Management
- Protected APIs
- Environment Variables

