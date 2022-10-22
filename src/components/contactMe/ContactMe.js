import React, { useRef, useState, useReducer } from 'react';
import { Button, Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';
import { FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { MdError } from 'react-icons/md';
import './contactMe.css';

const ContactMe = () => {
    const form = useRef();

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SUCCESS':
               return {...state, done: true, isPending: false} 
        case 'PENDING' :
            return { ...state, isPending: true}
            case 'ERROR' :
                return { ...state, error: true, isPending: false }
            default:
                return {state};
        }
    }
    const [{done, isPending, error }, dispatch] = useReducer(reducer, {done: false, isPending: false, error: null})
    const [open, setOpen] = useState(false)

    const buttonStyles = {
        width: '100%',
        fontWeight: '600',
        fontSize: '1rem',
        padding: '10px 1rem',
        borderRadius: '12px',
        textTransform: 'capitalize'
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    

    const sendEmail = (e) => {
        e.preventDefault();
        dispatch({type: 'PENDING'})

        emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
            .then((result) => {
                console.log(result);
               dispatch({type: 'SUCCESS'})
                setOpen(true);
                form.current.reset()
            }, (error) => {
                dispatch({ type: 'ERROR'})
                setOpen(true);
                setTimeout(()=>{
                    form.current.reset()  
                },8000)
                console.log(error);

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
                    <input type='text' placeholder='Enter Full Name' name="from_name" required />
                    <input type='text' placeholder='Enter email address' name='from_name' required />
                    <textarea placeholder='Write A Message' name='message' required></textarea>
                     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} sx={{position: 'relative', width: '50%'}}>
                    <Button
                        variant="contained"
                        color={error ? "error" : done ? "success" : "info"}
                        endIcon={error ? <MdError /> : done ? <IoCheckmarkDoneCircleOutline /> : <span>...</span>}
                        sx={buttonStyles}
                    >
                        {done ? 'Sent' : error ? 'Error Sending' : "Sending"}
                    </Button>
                    </Snackbar>
                    <button type='submit'>{isPending ? 'Sending...' : 'Send Message'}</button>


                </form>
            </div>
        </div >
    )
}

export default ContactMe