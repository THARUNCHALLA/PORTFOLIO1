
import './Navbar.css';
import {  useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg'
import Nitheesh from '../assets/Nithhesh6.jpg';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu=()=>{
    menuRef.current.style.right='0';
  }
 
  
  const closeMenu=()=>{
    menuRef.current.style.right='-750px';
  }
 
  

  return (
    <div id="navbar" className="navbar">
      <div className='profile'>
     <img src={Nitheesh} alt="Profile "className="profile-pic"/>
      </div>
     
        <img
          src={menu_open}
          alt="Open Menu"
          className="nav-mob-open"
          onClick={openMenu}
    
        />
     
      <ul ref={menuRef} className="nav-menu">
      
          <img
            src={menu_close}
            alt="Close Menu"
            className="nav-mob-close"
            onClick={closeMenu}
           
          />
    
        <li className="menu-items">
          <AnchorLink href="#home" offset="50" className="nav-link">
            Home
          </AnchorLink>
        </li>
        <li className="menu-items">
          <AnchorLink href="#about" offset="50" className="nav-link">
            About
          </AnchorLink>
        </li>
        <li className="menu-items">
          <AnchorLink href="#services" offset="50" className="nav-link">
            Services
          </AnchorLink>
        </li>
        <li className="menu-items">
          <AnchorLink href="#contact" offset="50" className="nav-link">
            Contact
          </AnchorLink>
        </li>
      </ul>
      <button className="nav-connect">
        <AnchorLink href="#contact" offset="50" className="nav-link">
          Connect
        </AnchorLink>
      </button>
    </div>
  );
};
export default Navbar;