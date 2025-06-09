# 🎫 Teru Backend

**Teru** is a backend server for an event ticketing platform where users can purchase tickets for specific events. Events are managed and published through an admin dashboard. This project is built with **Node.js**, **Express.js**, and **TypeScript**, using **MongoDB** as the database.

---

## 📁 Project Structure

src/

├── app/

│ ├── builder/ # Response builder, error formatter, etc.

│ ├── config/ # App configuration (env, constants, etc.)

│ ├── DB/ # Database connection setup

│ ├── error/ # Custom error classes and handlers

│ ├── helpers/ # Utility helper functions

│ ├── interface/ # TypeScript interfaces

│ ├── middleware/ # Global and route-specific middlewares

│ ├── modules/ # Main features/modules like User, Event, Ticket

│ └── routes/ # Express route definitions

├── utils/ # General utility functions

├── app.ts # Express app setup

├── server.ts # Entry point for the app

├── socketIo.ts # Socket.IO configuration

├── ResponseTime.log # Logs API response times

├── app.log # General logs

.env # Environment configuration

.env.example # Sample environment variables

---

## 🛠️ Getting Started

### 1. Clone the Project

```bash
git clone https://github.com/bdCalling-Sdt-hub/Teeru_backend.git
cd Teeru
2. Install Dependencies
yarn install
or if you're using npm:

npm install
3. Create .env File
Duplicate .env.example and rename it to .env. Fill in your environment variables:

🚀 Running the Server
npm run dev

🎟️ Core Features
Users can browse events by category and purchase tickets.

Admin can create and manage events from the dashboard.

Secure authentication & authorization with JWT.

Email notifications via Nodemailer.

File uploads using Multer.

📦 Tech Stack
Node.js, Express.js, TypeScript

MongoDB with Mongoose

JWT Authentication

Zod for validation

Multer, Nodemailer

ESLint, Prettier for code quality

📩 Contact
👤 Rasel Chowdhury
📧 raseldev847@gmail.com

📃 License
This project is licensed under the ISC license.


Let me know if you want this saved as a file or need a downloadable version.