import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navlink">Home</Link>
        <Link to="/list" className="navlink">List</Link>
        <Link to="/population" className="navlink">Population</Link>
        <Link to="/custom" className="navlink">Custom</Link>
      </nav>
    </div>
  );
};

export default Navbar;
