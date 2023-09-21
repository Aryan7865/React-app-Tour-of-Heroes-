import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const hero = { name, body };

    fetch('http://localhost:8000/heroes', { // Change the URL to the correct endpoint
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hero)
    }).then(() => {
      history.push('/heroes'); // Redirect to the heroes page after creating a hero
    })
  }

  return (
    <div className="create">
      <h2>Add a New Hero</h2>
      <form onSubmit={handleSubmit}>
        <label>Hero's Name:</label><br />
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Hero body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Add Hero</button>
      </form>
    </div>
  );
}
 
export default Create;
