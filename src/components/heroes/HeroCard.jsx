import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div
      className='card ms-3 animate__animated animate__fadeIn'
      style={{ maxWidth: 540 }}
    >
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img
            src={`./assets/heroes/${id}.jpg`}
            className='card-img'
            alt={superhero}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>
              {superhero} ({alter_ego})
            </h5>
            {alter_ego !== characters && (
              <p className='card-text'>{characters}</p>
            )}
            <p className='card-text mb-5'>
              {' '}
              First Appearance:
              <small className='text-muted'> {first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`} className='btn btn-primary '>
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
