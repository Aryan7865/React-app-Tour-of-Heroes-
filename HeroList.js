// HeroList.js
import React from 'react';
import { Link } from 'react-router-dom';

const HeroList = ({ heroes }) => {
  return (
    <div className="hero-list">
      {heroes.map(hero => (
        <div className="hero-preview" key={hero.id}>
          {/* Use Link to navigate to the HeroDetails page with the hero's id */}
          <Link to={`/heroes/${hero.id}`}>
            <h2>{hero.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeroList;
