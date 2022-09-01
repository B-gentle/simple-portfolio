import React from 'react';
import './footer.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className='footer'>
            <div>
                <hr/><span>Eyo Bright</span><hr/>
            </div>
            <span className='footer-social-links'>
                <a href="https://twitter.com/b_gentle12" target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href="https://brighteyo16@gmail.com" target="_blank" rel="noreferrer"><SiGmail /></a>
                <a href="https://www.linkedin.com/in/bright-eyo-48a29a163/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                <a href="https://github.com/B-gentle" target="_blank" rel="noreferrer"><FaGithub /></a>
            </span>
            <p>BeeTech &copy; {date} | All Rights Reserved</p>
        </footer>
    )
}

export default Footer