import React from "react";
import { useSelector } from "react-redux";
import ProductCarta from "../../components/carta/ProductCarta";

import "../styles/Carta.css";

function Carta() {
  const listProducts = useSelector((state) => state.listProducts);

  return <ProductCarta products={listProducts} />;
}

export default Carta;
