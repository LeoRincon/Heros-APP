import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  let history = useNavigate();

  const handleLogin = () => {
    history('/');
  };

  return (
    <div className='container mt-5'>
      <h2>Login</h2>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>
        login
      </button>
    </div>
  );
};
