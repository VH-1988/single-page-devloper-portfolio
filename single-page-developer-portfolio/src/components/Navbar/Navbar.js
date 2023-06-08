import React from 'react';
import '../Navbar/Navbar.css';
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='header'>
        <Link>Vuyolwethu Halam</Link>
        </div>
        <ul className='nav-menu'>
        <li>
            <Link to="https://github.com/VH-1988/single-page-devloper-portfolio.git"><FaGithub/></Link>
        </li>
        <li>
            <Link to="https://www.linkedin.com/in/vuyolwethu-halam-472b1b200/"><FaLinkedin/></Link>            
        </li>
        <li>
            <Link to="https://twitter.com/i/flow/login"><FaTwitter/></Link>
        </li>
        <li>
            <Link to="https://www.youtube.com/channel/UCwQjGP6xfZsg4aB5-WjJlvQ"><FaYoutube/></Link>
        </li>
        </ul>
        <Link className='btn'>Search on linkedin</Link>
  </div>
  
  )
};

export default Navbar;