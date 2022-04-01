import React, { useEffect } from "react";
import { setProducts } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import GetProducts from "../api/getProducts";
import ProductCarta from "../components/carta/ProductCarta";

import "../styles/Carta.css"


function Carta() {
  const dispatch = useDispatch();
  const listProducts = useSelector(state => state.listProducts)

  useEffect(() => {
    GetProducts().then((res) => {
      dispatch(setProducts(res.body));
    });
  }, []);

  return (
    <ProductCarta products={listProducts} />
  );
}

export default Carta;
