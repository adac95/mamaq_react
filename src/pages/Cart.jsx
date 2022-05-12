import React from "react";
import { useSelector } from "react-redux";
import { ProductOfCart } from "../components/cart/ProductOfCart";

import "../styles/Cart.css";

export const Cart = () => {
  const cartCounter = useSelector((state) => state.cartCounter);
  const cart = useSelector((state) => state.cart);

  return (
    <section className='cart-section'>
      {/* EXISTE USUARIO PERO NO TIENE NINGUN PRODUCTO */}
      {cartCounter < 1 ? (
        <p>Carrito vacio</p>
      ) : (
        //  EXISTE USUARIO CON CARRITO
        <>
          <h2 className='h2 cart__h2'>Carrito</h2>
          <a
            id='cartCheckoutA'
            className='a cart__product-checkout-a'
            href='/checkout'
          >
            Proceder al pago (<span id='cartCounterCheckoutCart'></span>
            productos)
          </a>
          {cart.products.map((product) => (
            <ProductOfCart key={product._id} product={product} />
          ))}
        </>
      )}
    </section>
  );
};
