import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { categories } from "../data/ecommerceData";
import { pageLinks } from "../data/Pages";
import { useEffect } from "react";
import { useGlobalContext } from "../../functions/Context";
import { BiSearchAlt } from "react-icons/bi";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { AiTwotoneShopping, AiOutlineClose } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
function Header() {
  const { changeActiveLink, activeLink, amount, haveAcount } =
    useGlobalContext();
  useEffect(() => {
    if (window.location.pathname == "/") {
      changeActiveLink("home");
    } else {
      changeActiveLink(window.location.pathname.slice(1));
    }
  }, [window.location.pathname]);
  const [showCategory, setShowCategory] = useState(false);
  const [isNavShow, setIsNavShow] = useState(false);
  return (
    <header>
      <div className="container d-flex-between">
        <div className="top">
          <h2 className="logo">Bonik</h2>
          <form className="search-form">
            <div className="input-control">
              <BiSearchAlt htmlFor="search" />
              <input
                type="text"
                placeholder="Search Here..."
                name="search"
                id="search"
              />
            </div>
            <button type="submit">Search</button>
          </form>
          <div className="top-icons">
            <Link
              to="/profile"
              className={`top-icon ${haveAcount && "profile-active"}`}
            >
              <FaUserAlt />
            </Link>
            <Link to="/cart" className="top-icon shopping-btn">
              {haveAcount && <span>{amount}</span>}
              <AiTwotoneShopping />
            </Link>
          </div>
        </div>
        <div
          className={`bottom w-100 ${
            activeLink == "products" ? "d-flex-between" : "d-flex-center"
          }`}
        >
          {activeLink == "products" ? (
            <h5
              className="categories-filter d-flex-center"
              onClick={() => setShowCategory(!showCategory)}
            >
              <HiOutlineViewGridAdd
                className={`category-icon ${showCategory && "active"}`}
              />
              <span>Categories</span>
              {showCategory ? (
                <IoIosArrowUp className="category-arrow" />
              ) : (
                <IoIosArrowDown />
              )}
            </h5>
          ) : (
            ""
          )}
          <div className={`categories ${showCategory && "active"}`}>
            <div className="categories-list">
              {categories.map((category) => {
                const { id, cateImg, cateName } = category;
                return (
                  <a
                    href={`#${cateName}`}
                    className="category"
                    key={id}
                    style={{ animationDelay: `${id * 0.1}s` }}
                  >
                    <img src={cateImg} alt={cateName} />
                    <p>{cateName}</p>
                  </a>
                );
              })}
            </div>
          </div>
          <ul className={`links-list d-flex-center ${isNavShow && "active"}`}>
            {pageLinks.map((pageLink) => {
              const { pageID, pageName, pageUrl, pageIcon } = pageLink;
              return (
                <li
                  key={pageID}
                  className={
                    activeLink == pageName.toLocaleLowerCase() ? "active" : ""
                  }
                  style={{ animationDelay: `${pageID * 0.1}s` }}
                >
                  <Link
                    to={pageUrl}
                    onClick={() =>
                      changeActiveLink(pageName.toLocaleLowerCase())
                    }
                  >
                    <span className="linkIcon">{pageIcon}</span>
                    <span className="linkName">{pageName}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {isNavShow ? (
            <AiOutlineClose
              className={`nav-toggler`}
              onClick={() => setIsNavShow(!isNavShow)}
            />
          ) : (
            <FaBars
              className={`nav-toggler`}
              onClick={() => setIsNavShow(!isNavShow)}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
