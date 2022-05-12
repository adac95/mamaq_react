import React from 'react'
import { useDispatch } from "react-redux";

export const SetUserAndToken = async (data, setErrorMsg, setUser) => {
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
