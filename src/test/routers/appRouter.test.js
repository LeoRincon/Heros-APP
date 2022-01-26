import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('when <appRouter> is called', () => {
  test('should show the login if it is not authenticated', () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    console.log(wrapper);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h2').text().trim()).toBe('Login');
  });

  test('should render the dashboard when the user is authenticated', () => {
    const contextValue = {
      user: {
        logged: true,
        name: 'Lenardo',
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('navbar').exists).toBeTruthy();
  });
});
