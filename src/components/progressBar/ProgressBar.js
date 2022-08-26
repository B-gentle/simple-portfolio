import React from 'react';
import './progressBar.css';

const ProgressBar = ({label, title, value}) => {
    return (
        <div className='progress'>
            <label htmlFor='html'>{label}</label>
            <span className='progress-bar'>
                <span>{title}</span>
                <progress id='html' max="100" value={value}></progress>
            </span>

        </div>
    )
}

export default ProgressBar