import { React, useState } from 'react';
import './navbar.css';
import { MdMenuOpen } from 'react-icons/md';
import { Link } from 'react-scroll/modules'; 

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav>
      <div>
        <h2>Eyo Bright</h2>
        <ul className={isClicked? 'drop' : ''}>
          <Link spy={true} to='about-me' smooth={true} activeClass='activeClass'><li>About Me</li></Link>
          <Link spy={true} to='services' smooth={true} activeClass='activeClass'><li>Services</li></Link>
          <Link spy={true} to='projects' smooth={true} activeClass='activeClass'><li>Projects</li></Link>
          <Link spy={true} to='contact-me' smooth={true} activeClass='activeClass'><li>Contact Me</li></Link>
        </ul>
        <span onClick={()=>{setIsClicked(!isClicked)}}><MdMenuOpen /></span>
      </div>
    </nav>
  )
}

export default Navbar