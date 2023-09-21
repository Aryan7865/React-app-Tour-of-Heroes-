import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState, useEffect } from 'react';

const HeroDetails = () => {
  const { id } = useParams();
  const { data: hero, error, isPending } = useFetch('http://localhost:8000/heroes/' + id);
  const history = useHistory();
  const [newName, setNewName] = useState('');
  
  useEffect(() => {
    // Set the new name when hero data becomes available
    if (hero) {
      setNewName(hero.name);
    }
  }, [hero]);

  const handleClick = () => {
    fetch('http://localhost:8000/heroes/' + hero.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  const handleUpdate = () => {
    fetch('http://localhost:8000/heroes/' + hero.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName })
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="hero-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { hero && (
        <article>
          <h2>ID Number: {hero.id}</h2>
          <h1>Name: { hero.name }</h1>
          <div>{ hero.body }</div>
          <h1>New Name:</h1>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          /> <br />
          <button onClick={handleUpdate}>Update Name</button>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default HeroDetails;
