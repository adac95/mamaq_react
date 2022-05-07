import { SET_EDIT_INPUT_VALUE, SET_EDIT_PRODUCTS_BTN, SET_PRODUCTS, SET_RESERVASMAP, SET_USER } from "./types"

export const setProducts = (payload) => ({
    type: SET_PRODUCTS,
    payload,
})

export const setReservasMap = (payload) => ({
    type: SET_RESERVASMAP,
    payload
})

export const setEditProductsBtn = (payload) => ({
    type: SET_EDIT_PRODUCTS_BTN,
    payload
})

export const setEditInputValue = (payload) => ({
    type: SET_EDIT_INPUT_VALUE,
    payload
})

export const setUser = (payload) => ({
    type: SET_USER,
    payload
})