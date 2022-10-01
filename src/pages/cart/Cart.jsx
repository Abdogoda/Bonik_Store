import React, { useEffect } from "react";
import { useGlobalContext } from "../../functions/Context";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import "./cart.css";
function Cart() {
  const {
    cart,
    total,
    removeAllCart,
    deleteCartItem,
    incCartItem,
    decCartItem,
    haveAcount,
  } = useGlobalContext();
  return (
    <section>
      {haveAcount ? (
        <>
          <h1
            style={{
              textAlign: "center",
              color: "var(--red)",
              marginBottom: "2rem",
            }}
          >
            Your Cart
          </h1>
          <div className="container cart-container">
            {cart.map((item) => {
              const { id, title, image, isLiked, amount, price } = item;
              return (
                <div className="cart-item-box" key={id}>
                  <div className="cart-item-info">
                    <div className="cart-item-image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="cart-item-details">
                      <div className="cart-item-name">
                        <h3>{title}</h3>
                        {isLiked && (
                          <span className="like">
                            <AiFillHeart />
                          </span>
                        )}
                      </div>
                      <div className="cart-item-price-count">
                        <p className="cart-item-price">${price}</p>
                        <div className="cart-item-update">
                          <button
                            className="cart-item-dec "
                            style={{ "--color": "orange" }}
                            onClick={() => decCartItem(id)}
                          >
                            <BiMinus className="icon" />
                          </button>
                          <span className="cart-item-count">{amount}</span>
                          <button
                            className="cart-item-inc"
                            style={{ "--color": "green" }}
                            onClick={() => incCartItem(id)}
                          >
                            <MdAdd className="icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item-control">
                    <p className="cart-item-total">Total: ${amount * price}</p>
                    <button
                      className="cart-item-delete"
                      style={{ "--color": "red" }}
                      onClick={() => deleteCartItem(id)}
                    >
                      <span>Remove</span>
                      <FaTrash className="icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container actions-container">
            {cart.length > 0 ? (
              <>
                <button className="btn remove" onClick={removeAllCart}>
                  Remove All
                </button>
                <button className="btn outline">Buy Now</button>
              </>
            ) : (
              <h1
                style={{
                  textAlign: "center",
                  color: "red",
                }}
              >
                You Don't Have Any Products!!
              </h1>
            )}
          </div>
        </>
      ) : (
        <>
          <h1
            style={{
              textAlign: "center",
              color: "var(--red)",
              marginBottom: "2rem",
            }}
          >
            You Don't Have An Account!
          </h1>
          <div className="container profile-container">
            <div className="sign-links">
              <Link to="/login" className="btn">
                Sign In
              </Link>
              <Link to="/register" className="btn outline">
                Sign Up
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
export default Cart;
