import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { types } from '../../types/index';
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = () => {
  let navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'Juan' },
    };

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/';
    navigate(lastPath, { replace: true });
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
