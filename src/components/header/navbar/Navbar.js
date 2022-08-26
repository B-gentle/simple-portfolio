import { React, useState } from 'react';
import './navbar.css';
import { MdMenuOpen } from 'react-icons/md';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav>
      <div>
        <h2>Eyo Bright</h2>
        <ul className={isClicked? 'drop' : ''}>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
        <span onClick={()=>{setIsClicked(!isClicked)}}><MdMenuOpen /></span>
      </div>
    </nav>
  )
}

export default Navbar