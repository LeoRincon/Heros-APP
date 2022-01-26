import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/NavBar';
import { types } from '../../../types/index';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('tests in <NavBar /> when is called', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: 'Pedro',
      logged: true,
    },
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path='/login' element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('should be displayed correctly NavBar', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');
  });

  test('Should call the logout, call the navigate and dispatch with the arguments', () => {
    wrapper.find('button').simulate('click');

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });

    expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
