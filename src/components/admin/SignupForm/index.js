import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { API_URL } from "../../../variables";
import { setUser } from "../../../actions";
import { postForm } from "../../../utils/postForm";
import { MessageError } from "../../MessageError";

const urlApi = `${API_URL}/api/auth/sign-up`;

export function SignUpForm() {
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className='signup-section'>
      {errorMsg && <MessageError text={errorMsg} />}

      <form
        onSubmit={(e) => {
          setUserWithToken(postForm(e, urlApi));
        }}
        id='signupForm'
        className='form'
      >
        <div className='form__textfield-div'>
          <input
            name='username'
            type='text'
            className='form__text-input'
            id='floatingUsername-signup'
            required
          />
          <label htmlFor='username' className='form__text-label'>
            Username
          </label>
        </div>
        <div className='form__textfield-div'>
          <input
            name='email'
            type='text'
            className='form__text-input'
            id='floatingEmail-signup'
            required
          />
          <label htmlFor='floatingInput' className='form__text-label'>
            Email
          </label>
        </div>
        <div className='form__textfield-div'>
          <input
            id='floatingPassword-signup'
            name='password'
            type='password'
            className='form__text-input'
            required
          />
          <label htmlFor='floatingPassword' className='form__text-label'>
            Contraseña
          </label>
        </div>
        <div className='form__textfield-div'>
          <input
            id='floatingPassword-signup'
            name='confirmPassword'
            type='password'
            className='form__text-input'
            required
          />
          <label htmlFor='floatingPassword' className='form__text-label'>
            Confirmar contraseña
          </label>
        </div>

        <button id='signupBtn' className='form__btn btn' type='submit'>
          Crear cuenta
        </button>
      </form>
    </section>
  );
}
