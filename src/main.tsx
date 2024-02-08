import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../src/index.css"; // Import Tailwind CSS styles
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
