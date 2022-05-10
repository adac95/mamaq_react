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
        className='container mt-5'
      >
        <div className='align-items-center container-sm fs-5'>
          <div className='form-floating mb-2'>
            <input
              name='username'
              type='text'
              className='form-control '
              id='floatingUsername-signup'
              placeholder='Username'
              required
            />
            <label htmlFor='username'>Username</label>
          </div>
          <div className='form-floating mb-2'>
            <input
              name='email'
              type='text'
              className='form-control '
              id='floatingEmail-signup'
              placeholder='Username'
              required
            />
            <label htmlFor='floatingInput'>Email</label>
          </div>
          <div className='form-floating mb-2'>
            <input
              id='floatingPassword-signup'
              name='password'
              type='password'
              className='form-control'
              placeholder='Password'
              required
            />
            <label htmlFor='floatingPassword'>Contraseña</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              id='floatingPassword-repeatPassword-signup'
              type='password'
              name='confirmPassword'
              className='form-control'
              placeholder='Password'
            />
            <label htmlFor='confirmPassword' required>
              Confirmar contraseña
            </label>
          </div>
          <div className='d-grid gap-2'>
            <button id='signupBtn' className='btn btn-warning' type='submit'>
              Crear cuenta
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
