import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../redux/productsReducer";
import { postProduct } from "../../../api/postProduct";
import { API_URL } from "../../../variables";
import "./styles.css";

export default function ProductCarta({ products }) {
  const user = useSelector((state) => state.products.user);
  const dispatch = useDispatch();

  return (
    <div className='ProductCarta'>
      {products.map((product) => (
        <div key={product._id} className='carta__template-container'>
          <img
            className='template-img'
            src={`${API_URL}/${product.imagen.path}`}
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
                  const res = await postProduct(
                    `${API_URL}/api/shoppingcart`,
                    user.token,
                    data,
                    "sí usar content type"
                  );
                  dispatch(setCart(res.body));
                } catch (error) {
                  let message =
                    error.statusText || "Ocurrio un error al enviar los datos";
                  console.log(error);
                  return message;
                }
              }}
              className='btn template-btn-cart carta__addCart-btn'
            >
              Agregar al carrito
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
