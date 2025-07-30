import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <Router>
        <App />
      </Router>
    </TaskProvider>
  </React.StrictMode>
);
