import koloz from '../images/koloz1.png';
import rechargewise from '../images/myrechargewise.png';
import childrenGlobal from '../images/childrenGlobal.png';
import tomyvytas from '../images/tomyvytas1.png';

import { FaHtml5, FaReact, FaNodeJs, FaWordpress, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

export const projectSlide = [
    {
        img: koloz,
        src: 'https://koloz.netlify.app'
    },
    {
        img: rechargewise,
        src: 'https://myrechargewise.com'
    },
    {
        img: childrenGlobal,
        src: 'https://children-global.org'
    },
    {
        img: tomyvytas,
        src: 'https://tomyvytasr.netlify.app'
    }
]

export const progress = [{
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