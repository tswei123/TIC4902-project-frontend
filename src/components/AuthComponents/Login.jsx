import { useState } from 'react';
import LoginView from './LoginView.jsx';
import useLoginForm from './LoginFormContainer.jsx';

//import { GoogleLogin } from '@react-oauth/google';
//import jwt_decode from "jwt-decode";

const Login = () => {
  const { inputs, handleChange, handleSubmit, isValid, message } =  useLoginForm();
  //Login Form
  return (
    <LoginView handleSubmit={handleSubmit} handleChange={handleChange} inputs={inputs} isValid={isValid} message={message}/>
  )
};

  /*
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    var decoded = jwt_decode(credentialResponse);
    console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
  //Google login form
  */

export default Login;