import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { API_URL } from "../../../variables";
import { setUser } from "../../../actions";
import { postForm } from "../../../utils/postForm";
import { MessageError } from "../../MessageError";
import { motion } from "framer-motion";

import "./styles.css"

const urlApi = `${API_URL}/api/auth/sign-in`;


export const SigninForm = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

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
    <section className='Signin-section'>
      {errorMsg && <MessageError text={errorMsg} />}

      <form
        id='signinForm'
        className='form'
        onSubmit={async (e) => {
          await setUserWithToken(postForm(e, urlApi));
        }}
      >
        <div className='form__textfield-div'>
          <input
            id='username'
            name='username'
            type='text'
            className='form__text-input'
            required
          />
          <label className='form__text-label' htmlFor='username'>
            Username
          </label>
        </div>
        <div className='form__textfield-div'>
          <input
            id='floatingPassword-signin'
            name='password'
            type='password'
            className='form__text-input'
            required
          />
          <label htmlFor='password' className='form__text-label'>
            Contraseña
          </label>
        </div>
        <div className='form__check-div'>
          <div className='switch' data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className='handle' layout />
          </div>
          <label className='form-check-label' htmlFor='recordarme-checkbox'>
            Recordarme
          </label>
        </div>
        <button id='signinBtn' className='form__btn btn' type='submit'>
          Iniciar sesión
        </button>
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
