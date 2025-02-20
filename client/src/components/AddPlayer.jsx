import { useState } from 'react';
import { addPlayer } from './Api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import '../components/style/AddPlayer.css'; 

const AddPlayer = () => {
  const [name, setName] = useState('');
  const [preferredPosition, setPreferredPosition] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 2) return alert("Name must be at least 2 characters");

    addPlayer({ name, preferredPosition }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container">
      <nav className="navLinks">
        <Link to="/" className="link">List</Link> |
        <Link to="/add" className="link">Add Player</Link>
      </nav>
      
      <div className="formContainer">
        <h2 className="title">Add Player</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <input 
              type="text" 
              placeholder="Player Name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              required 
              className="input"
            />
            {name.length > 0 && name.length < 2 && (
              <p className="errorText">Name must be at least 2 characters</p>
            )}
          </div>
          <div className="inputGroup">
            <input 
              type="text" 
              placeholder="Preferred Position" 
              value={preferredPosition} 
              onChange={e => setPreferredPosition(e.target.value)} 
              className="input"
            />
          </div>
          <button 
            type="submit" 
            disabled={name.length < 2}
            className={`button ${name.length < 2 ? 'disabled' : 'active'}`}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlayer;
