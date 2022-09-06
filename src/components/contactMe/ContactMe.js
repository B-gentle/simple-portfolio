import React, { useRef, useState } from 'react';
import './contactMe.css';
import emailjs from '@emailjs/browser';
import { FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactMe = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault();
    setIsPending(true)

    emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
      .then((result) => {
          if(!result){
              throw Error(error.text)
          }
          console.log(result);
          setDone(true);
          setIsPending(false)
          setError(false)
          form.reset()
      }, (error) => {
          console.log(error.text);
          setIsPending(false)
          setError(error.text)
      });
  };

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
                <form className='send-message-form' ref={form} onSubmit={sendEmail}>
                    <input type='text' placeholder='Enter Full Name' name="from_name" required/>
                    <input type='text' placeholder='Enter email address' name='from_name' required/>
                    <textarea placeholder='Write A Message' name='message' required></textarea>
                    { isPending && <input type='submit' value='Sending' disabled/> }
                    { !isPending && <input type='submit' value={ done? 'Sent':'Send Message'} style={{backgroundColor: done && "green", color: done && "#FFFFFF"}}/>}
                    { error && <div>{error}</div>}
                    
                </form>
            </div>
        </div>
    )
}

export default ContactMe