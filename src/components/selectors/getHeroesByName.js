import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  if (name === '') {
    return [];
  }
  const heroesByName = heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  );
  return heroesByName;
};
