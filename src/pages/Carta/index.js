import React from "react";
import { useSelector } from "react-redux";
import ProductCarta from "../../components/carta/ProductCarta";



function Carta() {
  const listProducts = useSelector((state) => state.products.listProducts);

  return <ProductCarta products={listProducts} />;
}

export default Carta;
