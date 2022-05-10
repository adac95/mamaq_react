import {
  SET_CART,
  SET_CART_COUNTER,
  SET_EDIT_INPUT_VALUE,
  SET_EDIT_PRODUCTS_BTN,
  SET_PRODUCTS,
  SET_RESERVASMAP,
  SET_USER,
} from "../actions/types";
import { getCookie } from "../utils/getCookie";

const initialState = {
  listProducts: [],
  reservasMap: false,
  editProductsBtn: { id: "", isTrue: false },
  editInputValue: {
    id: "",
    name: "",
    price: "",
    description: "",
  },
  user: getCookie("user")
    ? {
        username: JSON.parse(getCookie("user")).username,
        id: JSON.parse(getCookie("user")).id,
        email: JSON.parse(getCookie("user")).email,
        roles: JSON.parse(getCookie("user")).roles,
        token: getCookie("token"),
      }
    : {},
  cart: {},
  cartCounter: 0,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, listProducts: action.payload };
    case SET_RESERVASMAP:
      return { ...state, reservasMap: action.payload };
    case SET_EDIT_PRODUCTS_BTN:
      return { ...state, editProductsBtn: action.payload };
    case SET_EDIT_INPUT_VALUE:
      return { ...state, editInputValue: { ...action.payload } };
    case SET_USER:
      return { ...state, user: { ...action.payload } };
    case SET_CART:
      let total = 0
      if(action.payload.products){
        action.payload.products.forEach(el => {
          total += el.cantidad
          return total
        })
        // initialState.cartCounter= total
      }
      return { ...state, cart: { ...action.payload }, cartCounter: total };
    case SET_CART_COUNTER:
      return { ...state, cartCounter: action.payload };
    default:
      return { ...state };
  }
};

export default productsReducer;
