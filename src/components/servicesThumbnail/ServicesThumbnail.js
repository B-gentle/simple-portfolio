import React from 'react';
import './servicesThumbnail.css';

const ServicesThumbnail = ({icon, title, text}) => {
  return (
    <div className='services-thumbnail'>
        <span>{icon}</span>
        <span>{title}</span>
        <span>{text}</span>
    </div>
  )
}

export default ServicesThumbnail