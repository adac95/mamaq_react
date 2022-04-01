import { SET_PRODUCTS, SET_RESERVASMAP } from "./types"

export const setProducts = (payload) => ({
    type: SET_PRODUCTS,
    payload,
})

export const setReservasMap = (payload) => ({
    type: SET_RESERVASMAP,
    payload
})