import React from "react";
import { SigninForm } from "../../components/login/SigninForm";
import { SignUpForm } from "../../components/login/SignupForm";

import "./styles.css";

export default function Login() {
  return (
    <div className='Login-container'>
      <SigninForm />
      <SignUpForm />
    </div>
  );
}
