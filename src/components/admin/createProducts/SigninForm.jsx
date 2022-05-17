import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { API_URL } from "../../../variables";
import { setUser } from "../../../actions";
import { postForm } from "../../../utils/postForm";
import { MessageError } from "../../MessageError";
import { SetUserAndToken } from "../../../hooks/SetUserAndToken";



const urlApi = `${API_URL}/api/auth/sign-in`;

export const SigninForm = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();


  const setUserWithToken = async (data) => {
    try {
      const { id, email, token, username, roles } = await data;
      if (!id) {
        dispatch(setUser({}));
        setErrorMsg(await data);
        return data;
      }
      const userData = {
        id,
        username,
        email,
        token,
        roles,
      };
      setErrorMsg(null);
      document.cookie = `user=${JSON.stringify({
        id,
        email,
        username,
        roles,
      })}`;
      document.cookie = `token=${token}`;
      dispatch(setUser(userData));
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='signin-section'>
      {errorMsg && <MessageError text={errorMsg} />}
      

      <form
        id='signinForm'
        className='container mt-5'
        onSubmit={ async(e) => {
         await setUserWithToken(postForm(e, urlApi));
        }}
      >
        <div className='align-items-center container-sm fs-5'>
          <div className='form-floating mb-2'>
            <input
              id='username'
              name='username'
              type='text'
              className='form-control '
              placeholder='Username'
              required
            />
            <label htmlFor='username'>Username</label>
          </div>
          <div className='form-floating'>
            <input
              id='floatingPassword-signin'
              name='password'
              type='password'
              className='form-control'
              placeholder='Password'
              required
            />
            <label htmlFor='password'>Contraseña</label>
          </div>
          <div className='form-check form-switch'>
            <input
              id='flexSwitchCheckDefault-signin'
              className='form-check-input'
              type='checkbox'
            />
            <label
              className='form-check-label '
              htmlFor='flexSwitchCheckDefault'
            >
              Recordarme
            </label>
          </div>
          <div className='d-grid gap-2'>
            <button id='signinBtn' className='btn btn-warning' type='submit'>
              Iniciar sesión
            </button>
          </div>
        </div>
      </form>
      <div className='forget-container'>
        <p className='p forget__p'>
          Olvidaste tus datos?
          {/* <Link className="a forget__a">Haz click aquí</Link> */}
        </p>
      </div>
    </section>
  );
};
