import React from "react";
import "../../styles/Cart.css";
import { BtnToPatchProductOfCart } from "./BtnToPatchProductOfCart";

export const ProductOfCart = ({ product }) => {
  return (
    <div className='cart__product-container'>
      <img
        className='cart__product-img'
        src={`mamaq.herokuapp.com/${product.productImagenPath}`}
        alt={`imagen del producto ${product.productName}`}
      />
      {/* SEPARACION IMG Y DETALLES */}
      <div className='cart__product-div'>
        <h3 className='cart__product-tittle'>{product.productName}</h3>
        <p className='p cart__product-price'>
          Precio por unidad: {product.price} soles
        </p>
        <BtnToPatchProductOfCart
          className={
            "'cartLessBtn btn cart__product-btn cart__product-btn--less'"
          }
          content={"-"}
          product={product}
        />
        <span className='cart__product-cantidad'>{product.cantidad}</span>
        <BtnToPatchProductOfCart
          className={
            "'cartAddBtn btn cart__product-btn cart__product-btn--add'"
          }
          content={"+"}
          product={product}
        />
        <p className='p cart__product-total'>
          Total:
          {parseFloat(product.cantidad) * parseFloat(product.price)} soles{" "}
        </p>
      </div>
    </div>
  );
};
