import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getHeroesById } from '../selectors/getHeroesById';

export const HeroScreen = () => {
  let navigate = useNavigate();
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  useEffect(() => {
    if (!hero) {
      navigate('/');
    }
  }, [hero, navigate]);

  const validCharacter = () => {
    if (alter_ego !== characters) {
      return (
        <li className='list-group-item'>
          {' '}
          <b>Characters: </b>
          {characters}
        </li>
      );
    }
  };

  const handleClickReturn = () => {
    window.history.length <= 2 ? navigate('/') : navigate(-1);
  };

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          className='img-thumbnail animate__animated animate__fadeInLeft'
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
        />
      </div>
      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            {' '}
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          {validCharacter()}
          <li className='list-group-item'>
            {' '}
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className='list-group-item'>
            {' '}
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <button
          className='btn btn-outline-info mt-5'
          onClick={handleClickReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
};
