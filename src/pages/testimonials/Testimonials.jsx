import React from "react";
import "./testimonials.css";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import testimonials_data from "./testimonails_data";
function Testimonials() {
  return (
    <section>
      <h1
        style={{
          textAlign: "center",
          color: "var(--red)",
          marginBottom: "2rem",
        }}
      >
        Our Feedback
      </h1>
      <Swiper
        className="container testimonials_container"
        modules={[Autoplay, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {testimonials_data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="client_avatar">
                <img src={avatar} alt="avatar" className="circle-5" />
              </div>
              <h5 className="client_name">{name}</h5>
              <p className="client_review">{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
