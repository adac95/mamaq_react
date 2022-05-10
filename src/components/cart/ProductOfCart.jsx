import React from "react";

export const ProductOfCart = (product) => {
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
        <button
          className='cartLessBtn btn cart__product-btn cart__product-btn--less'
          data-productId='<%= product.productId %>'
          data-userId='<%= user._id %>'
          data-products_id='<%= product._id %>'
          data-productname='<%= product.productName %>'
          data-productPrice='<%= product.price %>'
          data-productCantidad='<%= product.cantidad %>'
          data-productimagenpath='<%= product.productImagenPath %>'
        >
          -
        </button>
        <span className='cart__product-cantidad'>{product.cantidad}</span>
        <button
          className='cartAddBtn btn cart__product-btn cart__product-btn--add'
          data-productId='<%= product.productId %>'
          data-userId='<%= user._id %>'
          data-productname='<%= product.productName %>'
          data-productPrice='<%= product.price %>'
          data-productCantidad='<%= product.cantidad %>'
          data-productimagenpath='<%= product.productImagenPath %>'
        >
          +
        </button>
        <p className='p cart__product-total'>
          Total:
          {parseFloat(product.cantidad) * parseFloat(product.price)} soles{" "}
        </p>
      </div>
    </div>
  );
};
