import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/index';

describe('when /authReducer/ is called', () => {
  test('should return the state for default', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test('should authenticate and place the user name', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Leonardo',
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: 'Leonardo' });
  });

  test('should logout and remove the user name', () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true, name: 'Leonardo' }, action);
    expect(state).toEqual({ logged: false });
  });
});
