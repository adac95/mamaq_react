import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../actions";

// AUN NO LOGRO HACER QUE FUNCIONE EN SIGNIN Y SIGNUP FORMS

export const setUserWithToken = async (data) => {
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
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
    document.cookie = `token=${token}`
    setErrorMsg(null);
    dispatch(setUser(userData));
  } catch (error) {
    console.log(error);
  }
};
