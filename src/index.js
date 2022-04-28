import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import TodoContainer from './components/TodoContainer';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>
);
