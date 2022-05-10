import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCart } from "../../actions";
import { API_URL } from "../../variables";

export default function ProductCarta({ products }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  return (
    <div className='ProductCarta'>
      {products.map((product) => (
        <div key={product._id} className='carta__template-container'>
          <img
            className='template-img'
            src={`http://mamaq.herokuapp.com/${product.imagen.path}`}
            alt='IMG'
          />
          <span className='template-name-price'>
            <h3 className='template-product'>{product.name}</h3>
            <p className='template-price'>{product.price}</p>
          </span>
          <p className='template-description'>{product.description}</p>
          <p className='template-category'>{product.category}</p>
          {user.id && (
            <button
              onClick={async () => {
                try {
                  const data = {
                    userId: user.id,
                    products: [
                      {
                        productId: product._id,
                        productName: product.name,
                        productImagenPath: product.imagen.path,
                        price: product.price,
                        cantidad: 1,
                      },
                    ],
                  };
                  let options = {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json; charset=utf-8",
                      "x-access-token": user.token,
                    },
                    body: JSON.stringify(data),
                  };
                  let res = await fetch(`${API_URL}/api/shoppingcart`, options);
                  let json = await res.json();
                  dispatch(setCart(json.body))
                } catch (error) {
                  let message =
                    error.statusText || "Ocurrio un error al enviar los datos";
                  console.log(error);
                  return message;
                }
              }}
              className='btn template-btn-cart carta__addCart-btn'>
              Agregar al carrito
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
