# Task Manager - Iteration 4

### Created by: Khushi  
### Student ID: 90541136043  

---

## 📘 Overview

This React-based Task Manager is a single-page application (SPA) built as part of the MTM6404 course. It allows users to create multiple task lists, add tasks with priorities, mark tasks as complete/incomplete, delete them, and sort by priority.

The application uses the **Context API** for state management and **localStorage** to persist data across sessions. Routing is handled with **React Router**, and the app is fully responsive for different screen sizes.

---


## 🎯 Features

- ✅ Create, view, and delete multiple task lists
- ✅ Add tasks to individual lists
- ✅ Assign priority to each task (High, Medium, Low)
- ✅ Mark tasks as complete/incomplete
- ✅ Show/hide completed tasks
- ✅ Tasks are automatically sorted by priority
- ✅ Fully responsive design
- ✅ State managed with React Context API
- ✅ Data persisted using `localStorage`
- ✅ Navigation between views using React Router

---


## 🎨 Color Palette Used

| Color       | Hex       | Usage                     |
|-------------|-----------|---------------------------|
| Red-Orange  | `#EA2F14` | Headers, highlights       |
| Burnt Orange| `#E6521F` | Buttons, accents          |
| Yellow-Orange | `#FB9E3A` | Priorities, borders        |
| Pale Yellow | `#FCEF91` | Background                |

---

## 🧱 Folder Structure
src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│
├── context/
│ └── TaskContext.jsx
│
├── pages/
│ ├── ListOverview.jsx // View all lists
│ └── TaskListPage.jsx // View tasks in a selected list
│
├── App.jsx
├── main.jsx
└── index.css

## 🚀 How to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/khushi905411/mtm6404-task-manager-khushi905411.git
Checkout to Iteration 4 Branch

2.Checkout to Iteration 4 Branch
git checkout iteration-4

3. Install Dependencies
   npm install

4. Start the Development Server
   npm run dev

5. Open the browser to run
 Visit: http://localhost:5173

📚 Technologies Used
React 18

Vite

React Router DOM

Context API

JavaScript (ES6+)

HTML5 & CSS3

LocalStorage

📱 Responsiveness
This application is designed to work smoothly on:

Desktop

Tablet

Mobile screens

