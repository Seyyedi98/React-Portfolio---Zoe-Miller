/* eslint-disable no-unused-vars */
import testimonialIcon from "../../assets/testimonials-icon.svg";
import shapeTwo from "../../assets/shape-2.png";
import { testimonials } from "../../Data";
import "./testimonials.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <h2 className="section__title text-cs">Testimonials</h2>
      <p className="section__subtitle">
        My <span>Customers Say</span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="testimonials__container container mySwiper"
      >
        {testimonials.map(({ img, name, author, description }, index) => {
          return (
            <SwiperSlide
              className="testimonial__item card card-one"
              key={index}
            >
              <div className="testimonial__header">
                <div className="testimonial__icon">
                  <img src={testimonialIcon} />
                </div>

                <img src={img} className="testimonial__img" />

                <p className="testimonial__description">{description}</p>
                <h3 className="testimonial__name">{name}</h3>
                <p className="testimonial__auhor">{author}</p>
                <img src={shapeTwo} className="shape c__shape" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
