import { HeroCard } from '../heroes/HeroCard';

export const renderHeroFound = (listHero) => {
  const heroesFound = listHero.map((hero) => (
    <HeroCard key={hero.id} {...hero} />
  ));
  return heroesFound;
};
