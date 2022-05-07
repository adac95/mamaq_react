import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { API_URL } from "../variables";
import { setUser } from "../actions";

import "../styles/UserNavHeader.css";

export const UserNavHeader = ({ user }) => {
  const dispatch = useDispatch();

  const logoutHandle = async () => {
    try {
      dispatch(setUser({}));
    } catch (err) {
      let message = err.statusText || "Ocurrió un error al elimnar los datos";
      console.log(err);
      return message;
    }
  };

  return user.id ? (
    <div className='header__datos-container'>
      <p className='p nav__p datos__p'>
        Hola <span className='nav__p-username'>{user.username}</span>
      </p>
      {user.roles[0].name === "admin" && (
        <Link className='a a-svg' to='/admin'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='house-user'
            className='admin-header-svg svg-inline--fa fa-house-user fa-w-18'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
          >
            <path
              fill='currentColor'
              d='M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z'
            ></path>
          </svg>
        </Link>
      )}

      <div className='header__cart'>
        <Link to='/cart' className='a a-svg a-cart-counter'>
          <svg
            className='a-svg svg-cart-counter svg-inline--fa fa-shopping-cart fa-w-18'
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='shopping-cart'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
          >
            <path
              fill='currentColor'
              d='M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z'
            ></path>
          </svg>
        </Link>
        <Link
          id='cartCounterHeaderNav'
          className='a a-svg a-cart-counter'
          to='/cart'
        >
          a
        </Link>
      </div>
      <p className='a btn datos__btn' onClick={logoutHandle}>
        Cerrar sesión
      </p>
    </div>
  ) : (
    <div className='header__datos-container'>
      <Link className='a header__datos-loginout' to='/login'>
        <p className='p nav__p datos__p'>Hola inicia sesion o registrate!</p>
      </Link>
    </div>
  );
};
