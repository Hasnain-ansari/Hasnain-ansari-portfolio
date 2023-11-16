import React from 'react'
import "./testimonial.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id:1,
    avatar: AVTR1,
    name: "Hasnain Ansari",
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aliquid quas quae, sit fuga harum repudiandae dolores quos quis distinctio?',
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Hasnain Ansari",
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aliquid quas quae, sit fuga harum repudiandae dolores quos quis distinctio?',
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Hasnain Ansari",
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aliquid quas quae, sit fuga harum repudiandae dolores quos quis distinctio?',
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Hasnain Ansari",
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aliquid quas quae, sit fuga harum repudiandae dolores quos quis distinctio?',
  },
];


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}

          >
        {
          data.map(({id, avatar, name, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='cient__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial