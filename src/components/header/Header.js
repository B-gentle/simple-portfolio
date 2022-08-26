import React from 'react';
import './header.css';
import Navbar from './navbar/Navbar';
import photo from './../../images/theBee.png';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const header = () => {
    return (
        <header className='header'>
            <div className='white-header'>
                <Navbar />
                <div className='introduction'>
                    <h3>HI THERE</h3>
                    <h2>I AM EYO BRIGHT</h2>
                    <span>A Top Notch Web Developer, <br/> and Mentor</span>
                    <span>
                       <a href="https://twitter.com/b_gentle12" target="_blank" rel="noreferrer"><FaTwitter /></a>
                        <a href="https://brighteyo16@gmail.com" target="_blank" rel="noreferrer"><SiGmail /></a>
                        <a href="https://www.linkedin.com/in/bright-eyo-48a29a163/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                        <a href="https://github.com/B-gentle" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </span>
                </div>
            </div>
            <div className='blue-header'>
                <img src={photo} alt='Eyo Bright of myself' />
            </div>
        </header>
    )
}

export default header