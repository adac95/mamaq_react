import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postForm } from "../../../utils/postForm";
import { API_URL } from "../../../variables";
import { setProducts } from "../../../actions";

export function CreateProductsForm() {
  const apiProducts = `${API_URL}/api/products`;
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.listProducts);
  const dispatch = useDispatch();

  return (
    <form
      className='create-item__form'
      id='createForm'
      onSubmit={async (e) => {
        const newProduct = await postForm(e, apiProducts, user.token);
        const updateArrayOfProducts = [...products];
        updateArrayOfProducts.push(newProduct.body);
        dispatch(setProducts(updateArrayOfProducts));
      }}
    >
      <label className='form__label' htmlFor='name'>
        Nombre
        <input
          className='form__input'
          type='text'
          id='name'
          name='name'
          required
        />
      </label>
      <label className='form__label' htmlFor='price'>
        Precio
        <input
          className='form__input'
          type='number'
          id='price'
          name='price'
          required
        />
      </label>
      <label className='form__label' htmlFor='category'>
        Categoria
        <select name='category' className='form__input'>
          <option className='form__input'>Vegetariano</option>
          <option className='form__input'>Vegano</option>
          <option className='form__input'>Carnivoro</option>
        </select>
      </label>
      <label className='form__label' htmlFor='description'>
        Descripcion
        <input
          className='form__input'
          type='text'
          id='description'
          name='description'
          required
        />
      </label>
      <label className='form__label' htmlFor='createProductImg'>
        Imagen
        <input
          className='form__input'
          type='file'
          name='createProductImg'
          id='product-image'
        />
      </label>
      <input
        className='form__input form__input--submit'
        type='submit'
        value='Crear item'
      />
    </form>
  );
}
