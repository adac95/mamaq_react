import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditInputValue, setEditProductsBtn } from "../../../actions";

export default function AdminProduct({ product, id }) {
  const editProductsBtn = useSelector((state) => state.editProductsBtn);
  const editInputValue = useSelector((state) => state.editInputValue);
  const dispatch = useDispatch();
  const deleteRefBtn = useRef();
  const confirmRefBtn = useRef();
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
      })
    );
    e.target.textContent = "Confirmar";
    deleteRefBtn.current.textContent = "Cancelar";
  };
  const confirmHandle = (e) => {
    if (e.target.textContent === "Confirmar") {
      console.log("Enviar DATOS");
    }
  };

  const cancelEditHandle = (e) => {
    if (e.target.textContent === "Cancelar") {
      dispatch(setEditProductsBtn({ id: "", isTrue: false }));
      dispatch(setEditInputValue({}));
      confirmRefBtn.current.textContent = "Editar";
      e.target.textContent = "Eliminar";
      return;
    }
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
          <img
            loading='lazy'
            className='item-image__img'
            src={`http://mamaq.herokuapp.com/${product.imagen.path}`}
            alt=''
          />
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
              if (e.target.textContent === "Editar") {
                editHandle(e);
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
              cancelEditHandle(e);
            }}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  );
}
