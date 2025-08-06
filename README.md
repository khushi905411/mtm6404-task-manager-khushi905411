# React + Vite
# Task Manager App

A React-based Task Manager web application with Firestore integration for persistent data storage. This app allows users to create multiple task lists, add tasks with priorities, mark tasks complete/incomplete, and delete tasks and lists. The app supports offline persistence using Firebase Firestore and features responsive design.

---

## Features

- Create, read, update, and delete (CRUD) task lists and tasks
- Tasks have priority levels (Low, Medium, High)
- Mark tasks as complete or incomplete
- Show/hide completed tasks toggle
- Persistent storage using Firebase Firestore
- Offline data persistence enabled
- Responsive UI with custom styling
- React Router navigation between lists
- Context API for state management

---

## Tech Stack

- React (with Hooks and Context API)
- Firebase Firestore
- React Router
- Vite (build tool)
- CSS (custom styling)

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase account and project set up

### Setup

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

Install dependencies
npm install

Create a Firebase project and Firestore database (in test mode for development)

Copy your Firebase config from the Firebase console and create a src/firebase.js file:

js
Copy
Edit
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
Start the development server

bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser to see the app.

Deployment
This project can be deployed to Netlify:

Push your code to a GitHub repository.

Go to Netlify and create a new site from Git.

Choose your repository.

Set the build command to:
npm run build
