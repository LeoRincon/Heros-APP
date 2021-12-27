import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';

export const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return user.logged ? <Navigate to='./login' /> : children;
};
