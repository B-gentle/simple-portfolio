import React from 'react';
import './projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Projects = () => {
  return (
    <div className='projects'>
        <h2>MileStones Of Projects</h2>
        <p>Here are a few Projects i've worked on</p>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        navigation={true}
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
       <SwiperSlide> <iframe className='project-frames' src="https://koloz.netlify.app" title="Koloz website designed for Koloz"></iframe></SwiperSlide>
        <SwiperSlide><iframe className='project-frames' src="https://cssabakaliki.netlify.app" title="UnOfficial website for CSSA"></iframe></SwiperSlide>
        <SwiperSlide><iframe className='project-frames' src="https://tomyvytasr.netlify.app" title="Landing Page for Tomyvytas Breweries"></iframe></SwiperSlide>
        <SwiperSlide><iframe className='project-frames' src="https://beetechomes.netlify.app" title="BeeTech homes finding website"></iframe></SwiperSlide>
        <SwiperSlide><iframe className='project-frames' src="https://hotelsbg.netlify.app" title="Hotel 45 Model site"></iframe></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects