import React from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';


const Login = () => {
  console.log('firebase', firebase); // eslint-disable-line no-console
  console.log('firebaseui', firebaseui); // eslint-disable-line no-console
  return (
    <div className="login">
      <h1>Facebook</h1>
      <h1>Google</h1>
      <h1>Email</h1>
    </div>
  )
}

export default Login
