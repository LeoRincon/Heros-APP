import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../auth/AuthContext';
import { PrivateRoute } from '../../routers/PrivateRoute';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span>Saliendo...</span>,
}));

describe('Test in `< PrivateRouter />` component when is called', () => {
  Storage.prototype.setItem = jest.fn();

  test('should show the component if is authenticated and save in the localStorage', () => {
    const contexValue = {
      user: {
        logged: true,
        name: 'Teste',
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contexValue}>
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper.find('h1').text().trim()).toBe('Private Component');
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
  });

  test('should block the component if it is not authenticated', () => {
    const contexValue = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contexValue}>
        <MemoryRouter initialEntries={['/']}>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper.find('span').text().trim()).toBe('Saliendo...');
  });
});
