import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { SearchScreen } from '../../pages/search/SearchScreen';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('test in <SearchScreen /> when is called', () => {
  test('should be displayed correctly with dafault values', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero');
  });

  test('should show anyone Hero and the input with queryString value', () => {
    let anyOneHero = 'batman';
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${anyOneHero}`]}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe(anyOneHero);
  });
  test('should show error if not find the hero', () => {
    let anyOneHero = 'anyOneHero';

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${anyOneHero}`]}>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-danger').text().trim()).toBe(
      `${anyOneHero}: Heroes Found ingresa un nombre valido en el input`
    );
  });

  test('Should call the navigate to the new screen', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );
    wrapper.find('input').simulate('change', {
      target: { name: 'searchText', value: 'batman' },
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault: () => {},
    });

    expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
  });
});
