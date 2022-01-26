import { mount } from 'enzyme';
import { DashboardRouter } from '../../routers/DashboardRouter';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe('tests in <DashboardRouter /> when is called', () => {
  const contextValue = {
    user: {
      name: 'Pepe',
      logged: true,
    },
  };
  test('should be displayed correctly Marvel Screen', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <DashboardRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Pepe');
    expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');
  });

  test('should be displayed correctly DC Screen', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Dc Screen');
  });
});
