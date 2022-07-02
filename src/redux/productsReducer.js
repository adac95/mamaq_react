import { createSlice } from "@reduxjs/toolkit";
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

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return { ...state, listProducts: action.payload };
    },
    setReservasMap: (state, action) => {
      return { ...state, reservasMap: action.payload };
    },
    setEditProductsBtn: (state, action) => {
      return { ...state, editProductsBtn: action.payload };
    },

    setEditInputValue: (state, action) => {
      return { ...state, editInputValue: { ...action.payload } };
    },
    setUser: (state, action) => {
      return { ...state, user: { ...action.payload } };
    },
    setCart: (state, action) => {
      let total = 0;
      if (action.payload.products) {
        action.payload.products.forEach((el) => {
          total += el.cantidad;
          return total;
        });
      }
      return { ...state, cart: { ...action.payload }, cartCounter: total };
    },
    setCartCounter: (state, action) => {
      return { ...state, cartCounter: action.payload };
    },
  },
});
export const {
  setProducts,
  setReservasMap,
  setEditProductsBtn,
  setEditInputValue,
  setUser,
  setCart,
  setCartCounter,
} = productsSlice.actions;
export default productsSlice.reducer;
