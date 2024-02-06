import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import AdminHome from '../pages/AdminHome'
import { RouterProvider } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    // <></>
    <AdminHome />
    // <Route path="/" element={ <LoginPage/>} />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={ <LoginPage/>} />
    //     <Route path="/home/admin" element={<AdminHome/>} />
    //   </Routes>
    // </Router>
  )
}

export default App
