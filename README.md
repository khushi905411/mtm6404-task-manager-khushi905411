Task Manager Web Application
A modern, responsive Task Manager web app built with React, Firebase Firestore, and React Router. It provides users the ability to manage multiple task lists with tasks prioritized and persisted in Firestore, including offline support.

Features
Multiple task lists management with create, update, and delete functionality

Task items with priority levels (High, Medium, Low)

Mark tasks as complete/incomplete and toggle visibility of completed tasks

Persistent data storage with Firebase Firestore and offline data persistence

Responsive design optimized for desktop and mobile

Navigation with React Router and centralized state management using Context API

Technology Stack
React (Hooks, Context API)

Firebase Firestore (Realtime Database with offline persistence)

React Router v6 (Client-side routing)

Vite (Development and build tool)

CSS3 (Custom styling)

Clone the repository
git clone https://github.com/your-username/your-repo.git

Install dependencies
npm install

Setup Firebase

Create a Firebase project and Firestore database in your Firebase console

Copy your Firebase config credentials

Create src/firebase.js with your Firebase config (see sample below)

Run the development server

npm run dev

Usage
Add new task lists on the homepage

Navigate into each list to add, update, and delete tasks

Use priority dropdown to set task importance

Mark tasks complete and toggle visibility

Data persists across sessions and devices

Contact
Khushi Anand
Email: khushianand083@gmail.com
GitHub: khushi905411
LinkedIn: khushi-anand



Folder Structure
bash
Copy
Edit
src/
 ├─ components/       # Reusable components (Navbar, Footer, etc.)
 ├─ context/          # React Context for task state
 ├─ pages/            # Page components (ListOverview, TaskListPage)
 ├─ services/         # Firestore interaction functions
 ├─ firebase.js       # Firebase config and initialization
 ├─ main.jsx          # App entry point
 └─ index.css         # Global CSS styles
