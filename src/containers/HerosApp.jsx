import { useReducer, useEffect } from 'react';
import { AppRouter } from '../routers';

import { AuthContext } from '../auth/AuthContext';
import { authReducer } from '../auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

export const HerosApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    if (!user) return;

    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
