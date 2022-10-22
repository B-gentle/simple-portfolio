import React from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import { progress } from '../../data/data';
import './myskills.css';

const MySkills = () => {
    
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