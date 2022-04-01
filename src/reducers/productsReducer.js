import { SET_PRODUCTS, SET_RESERVASMAP } from "../actions/types";

const initialState = {
    listProducts: [],
    reservasMap: false
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, listProducts: action.payload}
        case SET_RESERVASMAP:
            return {...state, reservasMap: action.payload}
        default:
            return {...state}
    }
}

export default productsReducer;