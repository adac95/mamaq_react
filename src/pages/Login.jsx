import React from "react";
import "../styles/Login.css";
// import "bootstrap/dist/css/bootstrap.min.css"
import { SigninForm } from "../components/admin/createProducts/SigninForm";
import { SignUpForm } from "../components/admin/createProducts/SignUpForm";


export default function Login() {
  return (
    <>
      <SigninForm />
      <SignUpForm />
    </>
  );
}
