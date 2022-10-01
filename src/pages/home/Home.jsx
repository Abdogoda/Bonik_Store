import React from "react";
import { Pagination, Autoplay, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./home.css";
import { Link } from "react-router-dom";
import MPdata from "../../componants/data/MPdata";
import FData from "../../componants/data/FData";
import Tdata from "../../componants/data/Tdata";
import Ndata from "../../componants/data/Ndata";
import { IoIosFlash } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { FaHandshake, FaHandHoldingHeart } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { MdOutlineDeliveryDining, MdVerifiedUser } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillStar,
  AiOutlineArrowRight,
} from "react-icons/ai";
import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.png";
import { useState } from "react";
function Home() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="home">
      <section>
        <div className="container home-container">
          <Swiper
            className="home-swipers"
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
            {MPdata.map((data) => {
              const { id, title, desc, cover } = data;
              return (
                <SwiperSlide key={id} className="home-swiper">
                  <div className="info">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <Link to="/products" className="btn">
                      Visit Collection
                    </Link>
                  </div>
                  <img src={cover} alt={title} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section
        className="bg-section"
        style={{ marginBottom: "0", paddingBottom: "3rem" }}
      >
        <div className="container flash-container">
          <h3 className="section-heading">
            <IoIosFlash className="section-heading-icon" /> Flash Deals
          </h3>
          <div className="flash-swipers-container">
            <Swiper
              className="flash-swipers"
              freeMode={true}
              modules={[Navigation, Autoplay, FreeMode]}
              autoplay={{ delay: 3000 }}
              navigation
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 15 },
                480: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 3, spaceBetween: 15 },
                1024: { slidesPerView: 4, spaceBetween: 15 },
              }}
            >
              {FData.map((data) => {
                const { id, name, price, discount, cover, amount } = data;
                return (
                  <SwiperSlide key={id} className="product-swiper">
                    <div className="product-top">
                      <span className="discount">{discount}% Off</span>
                      <div className="top-overlay">
                        <span onClick={() => setIsLiked(!isLiked)}>
                          {isLiked ? (
                            <AiFillHeart className="like active" />
                          ) : (
                            <AiOutlineHeart className="like" />
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="product-image">
                      <img src={cover} alt={name} />
                    </div>
                    <div className="info">
                      <p>{name}</p>
                      <div className="stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                      <div className="priceAndAdd">
                        <span className="price">
                          <p>${price}</p>
                        </span>
                        <span className="add">
                          <Link to="/products">
                            <AiOutlineArrowRight />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="container top-container mtop">
          <h3 className="section-heading">
            <FiGrid className="section-heading-icon" /> Top Categories
          </h3>
          <div className="top-swipers-container">
            <Swiper
              className="top-swipers"
              freeMode={true}
              modules={[FreeMode]}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 15 },
                600: { slidesPerView: 2, spaceBetween: 15 },
                992: { slidesPerView: 3, spaceBetween: 15 },
              }}
            >
              {Tdata.map((data, index) => {
                const { para, desc, cover } = data;
                return (
                  <SwiperSlide key={index} className="top-swiper">
                    <div className="top-top">
                      <div className="top-left">{para}</div>
                      <div className="top-right">{desc}</div>
                    </div>
                    <div className="product-image">
                      <img src={cover} alt={desc} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="container new-container mtop">
          <h3 className="section-heading">
            <FcApproval className="section-heading-icon" />
            New Arraivals
          </h3>
          <div className="new-arrivals-container">
            {Ndata.map((newOne, index) => {
              return (
                <div className="newOne" key={index}>
                  <img src={newOne.cover} alt="" />
                  <p>{newOne.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container new-container mtop">
          <h3 className="section-heading">
            <FaHandshake className="section-heading-icon" />
            Make A Deal
          </h3>
          <div className="deal-arrivals-container">
            <img src={banner1} alt="banner1" />
            <img src={banner2} alt="banner2" />
          </div>
        </div>
        <div className="container new-container mtop">
          <h3 className="section-heading">
            <FaHandHoldingHeart className="section-heading-icon" />
            Our Servises
          </h3>
          <div className="services-container">
            <div className="services-box">
              <MdOutlineDeliveryDining className="services-icon" />
              <h5>Worldwide Delivery</h5>
              <p>
                We Offer Competitive prices on our 100 million plus product any
                range.
              </p>
            </div>
            <div className="services-box">
              <ImProfile className="services-icon" />
              <h5>Safe Payment</h5>
              <p>
                We Offer Competitive prices on our 100 million plus product any
                range.
              </p>
            </div>
            <div className="services-box">
              <MdVerifiedUser className="services-icon" />
              <h5>Shop With Confidence</h5>
              <p>
                We Offer Competitive prices on our 100 million plus product any
                range.
              </p>
            </div>
            <div className="services-box">
              <BiSupport className="services-icon" />
              <h5>24/7 Support</h5>
              <p>
                We Offer Competitive prices on our 100 million plus product any
                range.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
