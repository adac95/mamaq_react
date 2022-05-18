import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditInputValue,
  setEditProductsBtn,
  setProducts,
} from "../../../actions";
import { patchProducts } from "../../../api/patchProducts";
import { deleteProduct } from "../../../api/deleteProduct";
import { API_URL } from "../../../variables";

export default function AdminProduct({ product, id }) {
  const editProductsBtn = useSelector((state) => state.editProductsBtn);
  const editInputValue = useSelector((state) => state.editInputValue);
  const products = useSelector((state) => state.listProducts);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const imagenInput = useRef();
  const deleteRefBtn = useRef();
  const confirmRefBtn = useRef();

  const formData = new FormData();

  const inputValueHandler = (e) => {
    dispatch(
      setEditInputValue({
        ...editInputValue,
        [e.target.name]: e.target.value,
      })
    );
  };

  const editHandle = (e) => {
    dispatch(setEditProductsBtn({ id: e.target.dataset.id, isTrue: true }));
    dispatch(
      setEditInputValue({
        id: product._id,
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        imagen: product.imagen,
      })
    );
    e.target.textContent = "Confirmar";
    deleteRefBtn.current.textContent = "Cancelar";
    return;
  };

  const confirmHandle = async (e) => {

    // poniendo todo en un formdata para que se pueda enviar la imagen
    const info = imagenInput.current.files[0];
    formData.append("createProductImg", info);
    formData.append("id", editInputValue.id);
    formData.append("name", editInputValue.name);
    formData.append("price", editInputValue.price);
    formData.append("category", editInputValue.category);
    formData.append("description", editInputValue.description);
    const res = await patchProducts(
      API_URL,
      user.token,
      formData,
      editInputValue.id
    );
    // sustituyendo el producto antiguo con el nuevo para hacer dispatch y no se pise por la "key"
    const patchedProduct = products.find((e) => e._id === res.body._id);
    // encontrando el indice del producto patch para cambiarlo con la nueva respuesta
    const indexToReplace = products.findIndex(
      (el) => el._id === patchedProduct._id
    );
    const newArrayOfProducts = [...products];
    newArrayOfProducts[indexToReplace] = res.body;

    dispatch(setProducts(newArrayOfProducts));
    dispatch(setEditProductsBtn(false));
    e.target.textContent = "Editar";
    deleteRefBtn.current.textContent = "Eliminar";
    return;
  };

  const cancelEditHandle = (e) => {
    dispatch(setEditProductsBtn({ id: "", isTrue: false }));
    dispatch(setEditInputValue({}));
    confirmRefBtn.current.textContent = "Editar";
    e.target.textContent = "Eliminar";
    return;
  };

  const deleteProductAskHandle = (e) => {
    confirmRefBtn.current.textContent = "Sí, eliminar";
    e.target.textContent = "Cancelar";
  };
  const deleteProductHandle = async (e) => {
    await deleteProduct(API_URL, user.token, product._id);
    dispatch(setProducts(products.filter((el) => el !== product)));
  };

  return (
    <tbody id={product._id}>
      <tr className='item-tr__span'>
        <th className='tr-fetch__th'>Nombre</th>
        <td className='item-name'>
          {editProductsBtn.isTrue && editProductsBtn.id === product._id ? (
            <input
              className='item-name'
              type='text'
              name='name'
              onChange={inputValueHandler}
              value={editInputValue.name}
            ></input>
          ) : (
            product.name
          )}
        </td>
      </tr>
      <tr className='item-tr__span'>
        <th className='tr-fetch__th'>Precio</th>
        <td className='item-price'>
          {editProductsBtn.isTrue && editProductsBtn.id === product._id ? (
            <input
              className='item-price'
              type='number'
              name='price'
              onChange={inputValueHandler}
              value={editInputValue.price}
            ></input>
          ) : (
            product.price
          )}
        </td>
      </tr>
      <tr className='item-tr__span'>
        <th className='tr-fetch__th'>Categoria</th>
        <td className='item-category'>
          {editProductsBtn.isTrue && editProductsBtn.id === product._id ? (
            <select className='item-category'>
              <option value='Carnivoro'>Carnivoro</option>
              <option value='Vegetariano'>Vegetariano</option>
              <option value='Vegano'>Vegano</option>
            </select>
          ) : (
            product.category
          )}
        </td>
      </tr>
      <tr className='item-tr__span item-tr__span--description'>
        <th className='tr-fetch__th'>Descripcion</th>
        <td className='item-description'>
          {editProductsBtn.isTrue && editProductsBtn.id === product._id ? (
            <input
              className='item-description'
              type='text'
              name='description'
              onChange={inputValueHandler}
              value={editInputValue.description}
            ></input>
          ) : (
            product.description
          )}
        </td>
      </tr>
      <tr className='item-tr__span item-tr__span--imagen'>
        <th className='tr-fetch__th'>Imagen</th>
        <td className='item-image'>
          {editProductsBtn.isTrue && editProductsBtn.id === product._id ? (
            <input
              ref={imagenInput}
              className='form__input'
              type='file'
              name='createProductImg'
            ></input>
          ) : (
            <img
              loading='lazy'
              className='item-image__img'
              src={`${API_URL}/${product.imagen.path}`}
              alt=''
            />
          )}
        </td>
      </tr>
      <tr className='item-tr__span'>
        <th className='tr-fetch__th'>Acciones</th>
        <td className='td-btn'>
          <button
            data-id={product._id}
            ref={confirmRefBtn}
            className='btn item-tr__btn edit-btn'
            onClick={(e) => {
              e.preventDefault();
              if (e.target.textContent === "Editar") {
                editHandle(e);
              } else if (e.target.textContent === "Sí, eliminar") {
                deleteProductHandle(e);
              } else {
                confirmHandle(e);
              }
            }}
          >
            Editar
          </button>
          <button
            className='btn item-tr__btn delete-btn'
            ref={deleteRefBtn}
            onClick={(e) => {
              e.preventDefault();
              if (e.target.textContent === "Eliminar") {
                deleteProductAskHandle(e);
              } else if (e.target.textContent === "Cancelar") {
                cancelEditHandle(e);
              }
            }}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  );
}
