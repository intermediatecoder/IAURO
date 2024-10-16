import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Your CSS import

import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root'); // Get your root element
const root = createRoot(container); // Create the root only once

// Render your App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
