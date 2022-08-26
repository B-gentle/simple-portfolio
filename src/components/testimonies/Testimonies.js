import React from 'react';
import './testimonial.css';
import emori from './../../images/emori.png';
import aisha from './../../images/aisha.jpg';
import charles from './../../images/charles.jpg';
import toheeb from './../../images/toheeb.jpg';
import ServicesThumbnail from '../servicesThumbnail/ServicesThumbnail';

const Testimonies = () => {
    const testifiers =[
        {
            src: emori,
            title: "Bright Emori",
            text: "Eyo Bright is an excellent developer and gets the job done on time.",
            alt: "Emori's face"
        },
        {
            src: aisha,
            title: "Aisha Ajisekola",
            text: "Eyo Bright is a passionate Developer, who's always ready to work.",
            alt: "Aisha's Face"
        },
        {
            src: charles,
            title: "Charbens Benedict",
            text: "Eyo Bright is a renouned programmer who pays attention to details and is very time conscious.",
            alt: "Charles' Face"
        },
        {
            src: toheeb,
            title: "Olododo Toheeb",
            text: "Eyo Bright is the definition of a true developer, as a developer myself, Bright has been the source of my inspiration, motivation and a great tutor",
            alt: "Toheeb's face"
        }
    ]
    return (
        <div className='testimonies'>
            <div className='testimony-title'>
                <h2>Testimonies & <br /> Recommendations</h2>
            </div>
            <div className='testimony-page'>
                {testifiers && testifiers.map((testifier, id)=>
                    <span key={id} className='testifier-wrapper'><ServicesThumbnail icon={<img src={testifier.src} alt={testifier.alt} />} title={testifier.title} text={testifier.text} /></span>
                )}
                
            </div>
        </div>
    )
}

export default Testimonies