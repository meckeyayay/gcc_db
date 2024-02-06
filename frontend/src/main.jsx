import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

// import ErrorPage from './routes/ErrorPage.jsx';
import LoginPage from './pages/LoginPage.jsx'
import AdminHome from './pages/AdminHome.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>  
      <Routes>
        <Route path="/" element={ <LoginPage/>} />
        <Route path="/home/admin" element={<AdminHome/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
