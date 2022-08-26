import React from 'react';
import './services.css';
import { GiTeacher, GiDesk } from 'react-icons/gi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import ServicesThumbnail from '../servicesThumbnail/ServicesThumbnail';

const Services = () => {

    const thumbnails = [{
        icon: GiTeacher,
        title: "Training",
        text: "I offer instructor-led training in a way that fits with the way you work. "
    },
    {
        icon: FaChalkboardTeacher,
        title: "Responsive Web Design",
        text: "I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better."
    },
    {
        icon: GiDesk,
        title: "IT Consulting",
        text: "I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives."
    }]
    return (
        <div className='services'>
            <h2>Services I Render.</h2>
            <div>
                {thumbnails && thumbnails.map((thumbnail, id) =>
                   <span className='thumb' key={id}> <ServicesThumbnail icon={<thumbnail.icon />} title={thumbnail.title} text={thumbnail.text} /></span>
                )}
            </div>
        </div>
    )
}

export default Services