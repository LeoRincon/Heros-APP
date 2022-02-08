import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { mount } from 'enzyme';

import { HeroScreen } from '../../components/heroes/HeroScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Test in < HeroScreen />', () => {
  test('should not show the HeroScreen if there is a hero in the URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/hero/:heroeId' element={<HeroScreen />} />
          <Route path='/' element={<h1>No Hero Page </h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find('h1').text().trim()).toBe('No Hero Page');
  });

  test('should show a Hero if the parameter exists', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path='/hero/:heroeId' element={<HeroScreen />} />
          <Route path='/' element={<h1>No Hero Page </h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find('.list-group-item').exists()).toBe(true);
  });

  test('should call the useNavigate when the button is clicked', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path='/hero/:heroeId' element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );
    wrapper.find('button').simulate('click');
    expect(mockNavigate).toHaveBeenCalled();
  });
});
