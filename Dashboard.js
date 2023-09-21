import React from 'react';
import HeroList from './HeroList';
import useFetch from './useFetch';

const Dashboard = () => {
  const { data, isPending, error } = useFetch('http://localhost:8000/heroes');
  let top4 = [];

  if (data) {
    top4 = data.slice(0, 4);
  }

  return (
    <div className="Dashboard">
      <h2>Top Heroes:</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {top4.length > 0 && <HeroList heroes={top4} />}
    </div>
  );
};

export default Dashboard;

       
