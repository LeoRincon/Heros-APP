import { useContext } from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/index';

export const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: types.logout });

    navigate('/login', { replace: true });
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) =>
              'nav-item nav-link ' + (isActive ? 'active' : '')
            }
            end
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              'nav-item nav-link ' + (isActive ? 'active' : '')
            }
            end
            to='/dc'
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              'nav-item nav-link ' + (isActive ? 'active' : '')
            }
            end
            to='/search'
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end px-4'>
        <nav className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-info'>{user.name}</span>
          <button
            className='nav-item nav-link btn'
            exact='true'
            to='/login'
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </div>
    </nav>
  );
};
