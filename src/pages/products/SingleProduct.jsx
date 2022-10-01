import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../functions/Context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./products.css";

function SingleProduct() {
  const { products, changeLiked, addToCart } = useGlobalContext();
  const ID = useParams().id;
  const product = products.filter((x) => x.id == ID)[0];
  return (
    <section>
      <div className="container single-product-container">
        <div className="single-image-box">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="single-content-box">
          <div className="name">
            <h3>{product.title}</h3>
            <span onClick={() => changeLiked(product.id)}>
              {product.isLiked ? (
                <AiFillHeart className="like active" />
              ) : (
                <AiOutlineHeart className="like" />
              )}
            </span>
          </div>
          <div className="info">
            <p className="category">
              Category: <span>{product.category}</span>
            </p>
            <p className="price">
              Price: <span>${product.price}</span>
            </p>
            <p className="amount">
              Amount: <span>{product.amount}</span>
            </p>
            <p className="total">
              Total: <span>${product.amount * product.price}</span>
            </p>
          </div>
          <div className="AddAndShow">
            <span className="add" onClick={() => addToCart(product.id)}>
              Add to Cart
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
