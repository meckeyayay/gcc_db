import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [contract, setContract] = useState([])
  const [admin, setAdmin] = useState([])
  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async ( )=> {
    console.log(axios.get("/home/admin"))
    const response = await axios.get("/home/admin")
    console.log(response);
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // You can add search functionality here
  };

  return (
    <div className="admin-home-container">
      <div className={`navbar ${menuOpen ? 'open' : ''}`}>
        {/* Hamburger menu icon */}
        <div className="menu-icon" onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {/* Other navbar content can go here */}
      </div>

      <div className="content">
        <h1>Title</h1>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Contract list */}
        {/* <ul className="contract-list">
          {contracts.map((contract, index) => (
            <li key={index}>{contract}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default AdminHome;
