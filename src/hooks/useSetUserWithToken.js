import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../actions";

export const useSetUserWithToken = async (token) => {
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  try {
    const res = await token;
    const { error, body } = await res;
    if (error) {
      setErrorMsg(error);
      dispatch(setUser({}));
      return error;
    }
    const userData = {
      id: body.user.id,
      username: body.user.username,
      email: body.user.email,
      token: body.user.token,
    };
    setErrorMsg(null);
    dispatch(setUser(userData));
    return errorMsg
  } catch (error) {
    console.log(error);
  }
};
