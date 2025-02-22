import React, { useState } from 'react';
import './Navbar.css';
import logo_lightt from '../pages/ece-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <button className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <img src={logo_lightt} alt="Logo" className='logo' />

      <ul className={isMenuOpen ? 'active' : ''}>
        <a href="/"><li>Home</li></a>
        <a href="/Initiatives"><li>Initiatives</li></a>
        <a href="/blog"><li>Blogs</li></a>
        <a href="/AboutUs"><li>About Us</li></a>
        <a href="/MeettheTeam"><li>The Team</li></a>
        <a href="/mes"><li>MES</li></a>

      </ul>
    </div>
  );
}

export default Navbar;
