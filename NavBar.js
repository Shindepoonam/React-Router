import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;
