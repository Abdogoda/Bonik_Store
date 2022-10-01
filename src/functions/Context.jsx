import { useReducer } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";
import Reducer from "./Reducer";
import { products } from "../componants/data/ecommerceData";
import { categories } from "../componants/data/ecommerceData";
const AppContext = createContext();
const initialState = {
  products: products,
  categories: categories,
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  total: 0,
  amount: 0,
  message: "",
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  haveAcount: localStorage.getItem("haveAcount") || "",
  activeLink: "home",
  loading: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const changeActiveLink = (linkText) => {
    return dispatch({ type: "CHANGE_ACTIVE_LINK", payload: linkText });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state.users));
  }, [state.users]);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  useEffect(() => {
    localStorage.setItem("haveAcount", state.haveAcount);
  }, [state.haveAcount]);
  const changeLiked = (id) => {
    return dispatch({ type: "CHANGE_LIKED", payload: id });
  };
  const addToCart = (id) => {
    return dispatch({ type: "ADD_TO_CART", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL_AMOUNT" });
  }, [state.cart]);
  const removeAllCart = () => {
    dispatch({ type: "REMOVE_ALL_CART" });
  };
  const deleteCartItem = (id) => {
    dispatch({ type: "DELETE_CART_ITEM", payload: id });
  };
  const decCartItem = (id) => {
    dispatch({ type: "DEC_CART_ITEM", payload: id });
  };
  const incCartItem = (id) => {
    dispatch({ type: "INC_CART_ITEM", payload: id });
  };
  const setNewUser = (user) => {
    dispatch({ type: "SET_NEW_USER", payload: user });
  };
  const loginUser = (user) => {
    dispatch({ type: "LOGIN_USER", payload: user });
  };
  const logoutHandle = () => {
    dispatch({ type: "LOGOUT" });
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_MESSAGE" });
    }, 5000);
  }, [state.message]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        changeActiveLink,
        changeLiked,
        addToCart,
        removeAllCart,
        deleteCartItem,
        incCartItem,
        decCartItem,
        setNewUser,
        loginUser,
        logoutHandle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
