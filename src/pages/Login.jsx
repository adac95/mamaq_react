import React from "react";
import "../styles/Login.css";
import { SigninForm } from "../components/admin/createProducts/SigninForm";
import { SignUpForm } from "../components/admin/createProducts/SignUpForm";

export default function Login() {
  return (
    <div className="Login-container">
      <SigninForm />
      <SignUpForm />
    </div>
  );
}
