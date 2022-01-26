import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/index';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('test in <LoginScreen /> when is called', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('should be displayed correctly LoginScreen', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should call the login, call the navigate and dispatch with the arguments', () => {
    const handleClick = wrapper.find('button').prop('onClick');
    handleClick();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: { name: 'Juan' },
    });

    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });

    localStorage.setItem('lastPath', '/dc');
    handleClick();
    expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true });
  });
});
