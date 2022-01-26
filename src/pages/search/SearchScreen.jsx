import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../components/selectors/getHeroesByName';
import { renderHeroFound } from '../../components/selectors/renderHeroFound';

export const SearchScreen = () => {
  const { search } = useLocation();
  const { q: searchQuery = '' } = queryString.parse(search);

  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    searchText: searchQuery,
  });
  const { searchText } = formValues;

  const heroesFiltered = useMemo(
    () => getHeroesByName(searchQuery),
    [searchQuery]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <section className='container'>
      <h2>SearchScreen</h2>
      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Find for Hero...'
              className='form-control'
              autoComplete='off'
              name='searchText'
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className='btn m-1 btn-block btn-outline-primary'
            >
              Search
            </button>
          </form>
        </div>
        <div className='col-7'></div>
        <h4>Result</h4>
        {searchQuery === '' && (
          <p className='alert alert-info'>Search a Hero</p>
        )}
        {searchQuery !== '' && heroesFiltered.length === 0 ? (
          <p className='alert alert-danger'>
            {`${searchQuery}: Heroes Found ingresa un nombre valido en el input`}
          </p>
        ) : (
          renderHeroFound(heroesFiltered)
        )}
      </div>
    </section>
  );
};
