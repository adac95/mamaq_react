import React from "react";

export function CreateProductsForm() {
  return (
    <form className='create-item__form' id='createForm'>
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
