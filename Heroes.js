import React from 'react';
import HeroList from './HeroList';
import useFetch from './useFetch';

const Heroes = () => {
  const { data: heroes, isPending, error } = useFetch('http://localhost:8000/heroes');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {heroes && <HeroList heroes={heroes} />}
    </div>
  );
};

export default Heroes;
