import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../actions";
import { patchCart } from "../../../api/cart/patchCart";
import { API_URL } from "../../../variables";

export const BtnToPatchProductOfCart = ({ content, className, product }) => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handlePatchClick = async () => {
    try {
      const data = {
        cartId: cart._id,
        products: [{ products_id: product._id }],
      };
      if (content === "+") {
        data.products[0].cantidad = product.cantidad + 1;
      }
      if (content === "-") {
        data.products[0].cantidad = product.cantidad - 1;
      }

      const res = await patchCart(
        `${API_URL}/api/shoppingcart`,
        user.token,
        data
      );
      dispatch(setCart(res.body))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className={className} onClick={handlePatchClick}>
      {content}
    </button>
  );
};
