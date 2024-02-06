import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import './AdminHome.css'; // Import your custom styles

const AdminHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [contract, setContract] = useState([])
  const [admin, setAdmin] = useState([])
  // const [contracts] = useState([
  //   'Contract 1',
  //   'Contract 2',
  //   'Contract 3',
  //   // Add more contracts as needed
  // ]);
  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async ( )=> {
    const response = await axios.get("http://localhost:5173/home/admin")
    console.log(response);
  }

  // const useEffect = () => {
  //   const fetchAllContract = async() => {
  //       try {
  //           const res = await axios.get("http:localhost:5173/home/admin")
  //           console.log(res)
  //       } catch(err) {
  //           console.log(err)
  //       }
  //   }
  //   fetchAllContract()
  // }
  // useEffect();

  // useEffect(() => {
  //   const fetchAllContract = async() => {
  //       try {
  //         const res = await fetch("http://localhost:5173/home/admin")
  //         if (!res.ok) {
  //           // throw new Error('Network response was not ok');
  //           console.log(4)
  //         }
  //         // console.log(res)
  //         // console.log(res)
  //         const data = await res.json();
  //         console.log(5)
  //         // setTableData(data);
          
  //           // const res = await axios.get("http://localhost:5173/home/admin")
  //         console.log(data)
  //       } catch(err) {
  //           console.log(err)
  //       }
  //   }
  //   fetchAllContract()
  // }, [])

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
