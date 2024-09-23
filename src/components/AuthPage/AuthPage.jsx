import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

const AuthPage = () => {
  return (
    <div>
      <h1>AuthPage</h1>
      <div>
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default AuthPage
