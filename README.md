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

yaml
Copy
Edit

---

## 🛠️ Getting Started

### 1. Clone the Project

```bash
git clone https://github.com/yourusername/teru-backend.git
cd teru-backend
2. Install Dependencies
bash
Copy
Edit
yarn install
or if you're using npm:

bash
Copy
Edit
npm install
3. Create .env File
Duplicate .env.example and rename it to .env. Fill in your environment variables:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
🚀 Running the Server
Development Mode
bash
Copy
Edit
yarn dev
Build for Production
bash
Copy
Edit
yarn build
Start in Production
bash
Copy
Edit
yarn start:prod
Make sure yarn build was run before this.

🎟️ Core Features
Users can browse events and purchase tickets.

Admin can create and manage events from the dashboard.

Secure authentication & authorization with JWT.

Real-time updates via Socket.IO.

Email notifications via Nodemailer.

SMS integration via Twilio.

File uploads using Multer.

🔧 Available Scripts
Command	Description
yarn dev	Run server in development mode
yarn build	Compile TypeScript to JavaScript
yarn start:prod	Run server in production mode
yarn lint	Run ESLint to check code quality
yarn lint:fix	Automatically fix lint issues
yarn prettier	Format code with Prettier
yarn prettier:fix	Fully format the project with Prettier

📦 Tech Stack
Node.js, Express.js, TypeScript

MongoDB with Mongoose

JWT Authentication

Zod for validation

Multer, Nodemailer, Twilio

Socket.IO for real-time features

ESLint, Prettier for code quality

📩 Contact
👤 Rasel Chowdhury
📧 rasel@example.com (replace with actual contact)

📃 License
This project is licensed under the ISC license.

kotlin
Copy
Edit

Let me know if you want this saved as a file or need a downloadable version.