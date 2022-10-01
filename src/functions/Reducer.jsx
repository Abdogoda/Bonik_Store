const Reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_LINK":
      return { ...state, activeLink: action.payload };
      break;
    case "CHANGE_LIKED":
      const newLikeProducts = state.products.map((product) => {
        if (product.id === action.payload) {
          return { ...product, isLiked: !product.isLiked };
        }
        return product;
      });
      return { ...state, products: newLikeProducts };
      break;
    case "CLEAR_MESSAGE":
      return { ...state, message: "" };
      break;
    case "SET_NEW_USER":
      const oldUser = state.users.find((x) => x.email === action.payload.email);
      if (oldUser) {
        return { ...state, message: "You Already Have an Account!!" };
      } else {
        return {
          ...state,
          users: [
            ...state.users,
            { id: new Date().getTime().toString(), ...action.payload },
          ],
          message: "You Have Created Your Account Successfully",
        };
      }
      break;
    case "LOGIN_USER":
      const AUser = state.users.find(
        (x) =>
          x.email === action.payload.email &&
          x.password === action.payload.password
      );
      if (AUser) {
        return {
          ...state,
          user: AUser,
          haveAcount: true,
          message: "You Are In",
        };
      } else {
        return {
          ...state,
          haveAcount: false,
          message: "You Don't Have An Account!!",
        };
      }
      break;
    case "LOGOUT":
      return {
        ...state,
        user: {},
        haveAcount: false,
        message: "",
      };
      break;
    case "ADD_TO_CART":
      // increase the product amount in products
      const newamountProducts = state.products.map((product) => {
        if (product.id === action.payload) {
          return { ...product, amount: product.amount + 1 };
        }
        return product;
      });
      // search for the product in cart
      const searchProduct = state.cart.find(
        (product) => product.id === action.payload
      );
      if (searchProduct) {
        const oldIncCart = state.cart.map((product) => {
          if (product.id === action.payload) {
            return { ...product, amount: product.amount + 1 };
          }
          return product;
        });
        return {
          ...state,
          products: newamountProducts,
          cart: oldIncCart,
        };
      } else {
        const newProduct = state.products.find(
          (product) => product.id === action.payload
        );
        const newCart = [...state.cart, { ...newProduct, amount: 1 }];
        return {
          ...state,
          products: newamountProducts,
          cart: newCart,
        };
      }
      break;
    case "GET_TOTAL_AMOUNT":
      const { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return { ...state, total, amount };
      break;
    case "REMOVE_ALL_CART":
      return { ...state, cart: [] };
      break;
    case "DELETE_CART_ITEM":
      const newCartDeleted = state.cart.filter((x) => x.id !== action.payload);
      return { ...state, cart: newCartDeleted };
      break;
    case "INC_CART_ITEM":
      const newCartInc = state.cart.map((item) => {
        if (item.id == action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: newCartInc };
      break;
    case "DEC_CART_ITEM":
      const newCartDec = state.cart
        .map((item) => {
          if (item.id == action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((t) => t.amount !== 0);
      return { ...state, cart: newCartDec };
      break;
    default:
      break;
  }
  return state;
};
export default Reducer;
