import React from "react";

export function AdminHome() {
  return (
    <div>
      <div className='main__options-container'>
        <div className='main__option'>
          <p className='p option__p'>Actualizar la carta</p>
          <a
            href='/admin/create-products'
            id='goToCreateProductsLink'
            className='a option__btn btn-warning'
          >
            Click aquí
          </a>
        </div>
        <div className='main__option'>
          <p className='p option__p'>Crear nuevos usuarios</p>
          <a href='/admin/create-users' className='a option__btn btn-warning'>
            Click aquí
          </a>
        </div>
      </div>
      <span id='signinForm'></span>
      <span id='signupForm'></span>
      <div className='main__option'>
        <p className='p option__p'>Ir a la pagina de Mamaq</p>
        <a href='/' className='a option__btn btn-warning'>
          Click aquí
        </a>
      </div>
    </div>
  );
}


