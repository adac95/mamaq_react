import React from "react";
import "../styles/Login.css";
import { SigninForm } from "../components/admin/create-products/SigninForm";
import { SignUpForm } from "../components/admin/create-products/SignUpForm";

export default function Login() {
  return (
    <div className="Login-container">
      <SigninForm />
      <SignUpForm />
    </div>
  );
}
