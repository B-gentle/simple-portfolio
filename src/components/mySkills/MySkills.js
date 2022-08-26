import React from 'react';
import './myskills.css';
import { FaHtml5, FaReact, FaNodeJs, FaWordpress, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import ProgressBar from '../progressBar/ProgressBar';

const MySkills = () => {
    const progress = [{
        label: FaHtml5,
        title: 'HTML',
        value: 99
    },
    {
        label: FaCss3Alt,
        title: 'CSS',
        value: 90
    },
    {
        label: IoLogoJavascript,
        title: 'Javascript',
        value: 70
    },
    {
        label: FaReact,
        title: 'React',
        value: 70
    },
    {
        label: FaNodeJs,
        title: 'NodeJs',
        value: 70
    },
    {
        label: FaWordpress,
        title: 'wordPress',
        value: 80
    }]
    return (
        <div className='my-skills'>
            <h2>My Skills</h2>
            <span>Here are a few skills i possess</span>
            <span className='progress-wrapper'>
            {progress && progress.map((bar, id)=>
<ProgressBar key={id} label={<bar.label/>} title={bar.title} value={bar.value}/>
            )}
            </span>
        </div>
    )
}

export default MySkills