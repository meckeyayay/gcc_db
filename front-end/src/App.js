import AdminList from "./components/AdminList";
import ContractList from "./components/ContractList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import AdminHome from "./pages/AdminHome";

function App() {
  return (
    // <AdminList/>
    <Router>
      <Routes>
        <Route path="/" element={ <LoginPage/>} />
        <Route path="/home/admin" element={<AdminHome/>} />
      </Routes>
    </Router>
    // <div className="">
    //   helo
    // </div>
  );
}

export default App;
