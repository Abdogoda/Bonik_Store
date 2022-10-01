import React, { useState } from "react";
import { Pagination, Autoplay, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../functions/Context";
import "./products.css";
import { IoIosFlash } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { useEffect } from "react";
function Products() {
  const { products, cart, categories, changeLiked, addToCart } =
    useGlobalContext();
  return (
    <section className="bg-section">
      <div className="container product-contianer">
        <h1
          style={{
            textAlign: "center",
            color: "var(--red)",
            marginBottom: "2rem",
          }}
        >
          Our Products
        </h1>
        <div className="swipers-container">
          {categories.map((category) => {
            return (
              <div
                className="swiper-container ptop"
                id={category.cateName}
                key={category.id}
              >
                <h3 className="section-heading">
                  <IoIosFlash className="section-heading-icon" />
                  {category.cateName}
                </h3>
                <Swiper
                  className="products-swiper-box"
                  modules={[Autoplay, FreeMode, Pagination]}
                  pagination={{ clickable: true }}
                  freeMode={true}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 15 },
                    600: { slidesPerView: 2, spaceBetween: 15 },
                    992: { slidesPerView: 3, spaceBetween: 15 },
                  }}
                  autoplay={{ delay: 4000 }}
                >
                  {products
                    .filter((x) => x.category == category.cateName)
                    .map((product) => {
                      const { id, title, image, price, isLiked } = product;
                      const item = cart.find((x) => x.id == id);
                      const amount = item ? item.amount : 0;
                      return (
                        <SwiperSlide key={id} className="product-box">
                          <div className="product-box-top">
                            <p className="amount">{amount}</p>
                            <span onClick={() => changeLiked(id)}>
                              {isLiked ? (
                                <AiFillHeart className="like active" />
                              ) : (
                                <AiOutlineHeart className="like" />
                              )}
                            </span>
                          </div>
                          <div className="product-box-img">
                            <img src={image} alt={title} />
                          </div>
                          <div className="info">
                            <div className="product-content">
                              <div>
                                <p>{title}</p>
                                <div className="stars">
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiFillStar />
                                </div>
                                <span className="price">
                                  <p>${price}</p>
                                </span>
                              </div>
                              <Link className="show" to={`/products/${id}`}>
                                Show Product
                              </Link>
                            </div>
                            <div className="AddAndShow">
                              <span
                                className="add"
                                onClick={() => addToCart(id)}
                              >
                                Add To Cart
                              </span>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
