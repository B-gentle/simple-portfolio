import React from 'react';
import './projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { projectSlide } from '../../data/data';


const Projects = () => {
  return (
    <div className='projects'>
      <h2>MileStones Of Projects</h2>
      <p>Here are a few Projects i've worked on</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="project-slider"
      >
        {
          projectSlide && projectSlide.map((project, id) =>
            <SwiperSlide key={id}>
              <div className='project-slide-box'>
                <img src={project.img} alt='' />
                <a href={project.src}>Visit the website</a>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  )
}

export default Projects