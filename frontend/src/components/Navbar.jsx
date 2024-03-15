// Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css'; 
import { Link } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    <nav className="navbar">
      <div className="logo">Book store</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul onClick={()=>setIsOpen(!isOpen)}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books/create">Add Book</Link></li>
          
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? 'open' : ''}`} />
        <div className={`bar ${isOpen ? 'open' : ''}`} />
        <div className={`bar ${isOpen ? 'open' : ''}`} />
      </div>
    </nav>
  );
}

export default Navbar;
