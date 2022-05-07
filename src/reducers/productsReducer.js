import { SET_EDIT_INPUT_VALUE, SET_EDIT_PRODUCTS_BTN, SET_PRODUCTS, SET_RESERVASMAP, SET_USER } from "../actions/types";

const initialState = {
    listProducts: [],
    reservasMap: false,
    editProductsBtn: {id:"", isTrue:false},
    editInputValue: {
      id: "",
      name: "",
      price: "",
      description: "",
    },
    user: {},
}


const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, listProducts: action.payload };
    case SET_RESERVASMAP:
      return { ...state, reservasMap: action.payload };
    case SET_EDIT_PRODUCTS_BTN:
      return {...state, editProductsBtn: action.payload}
    case SET_EDIT_INPUT_VALUE:
      return {...state, editInputValue: {...action.payload}}
    case SET_USER:
      return {...state, user: {...action.payload}}
    default:
      return { ...state };
  }
};

export default productsReducer;
