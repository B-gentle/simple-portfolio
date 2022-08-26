import React from 'react';
import './contactMe.css';
import { FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactMe = () => {
    return (
        <div className='contact-me'>
            <div className='get-in-touch'>
                <h2>Get In Touch</h2>
                <small>You Can contact me with the following medium</small>
                <span className='contact-social-links'>
                    <a href="https://twitter.com/b_gentle12" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/in/bright-eyo-48a29a163/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                    <a href="https://github.com/B-gentle" target="_blank" rel="noreferrer"><FaGithub /></a>
                </span>
                <span>
                    <a className='gmail' href="https://brighteyo16@gmail.com" target="_blank" rel="noreferrer"><SiGmail /></a>
                    <small>
                        <address>brighteyo16@gmail.com</address>
                        <span>Send a Message anytime</span>
                    </small>
                </span>
                <span>
                    <span className='whatsapp'><FaWhatsapp /></span>
                    <small>
                        <a href='https://wa.me/message/SPY7ARHAS4OGE1' target="_blank" rel="noreferrer">+234-9020-533-101</a>
                        <span>Message me anytime</span>
                    </small>
                </span>
            </div>
            <div className='contact-form'>
                <h3>Need A Service?</h3>
                <h2>Send A Message</h2>
                <form className='send-message-form'>
                    <input type='text' placeholder='Enter Full Name'/>
                    <input type='text' placeholder='Enter email address'/>
                    <textarea placeholder='Write A Message'></textarea>
                    <input type='submit' value='Send Message'/>
                </form>
            </div>
        </div>
    )
}

export default ContactMe