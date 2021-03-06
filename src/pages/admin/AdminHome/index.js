import React from "react";
import { Link } from "react-router-dom";

export function AdminHome() {
  return (
    <div>
      <div className='main__options-container'>
        <div className='main__option'>
          <p className='p option__p'>Actualizar la carta</p>
          <Link
            to='/admin/create-products'
            id='goToCreateProductsLink'
            className='a option__btn btn-warning'
          >
            Click aquí
          </Link>
        </div>
        <div className='main__option'>
          <p className='p option__p'>Crear nuevos usuarios</p>
          <Link to='/admin/create-users' className='a option__btn btn-warning'>
            Click aquí
          </Link>
        </div>
      </div>
      <span id='signinForm'></span>
      <span id='signupForm'></span>
      <div className='main__option'>
        <p className='p option__p'>Ir a la pagina de Mamaq</p>
        <Link to='/' className='a option__btn btn-warning'>
          Click aquí
        </Link>
      </div>
    </div>
  );
}
