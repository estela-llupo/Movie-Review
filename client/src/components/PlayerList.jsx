import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers, deletePlayer } from './Api';
import '../components/style/PlayerList.css'; 

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then(res => setPlayers(res.data));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this player?")) {
      deletePlayer(id).then(() => {
        setPlayers(players.filter(player => player._id !== id));
      });
    }
  };

  return (
    <div className="container">
        <div className='top-nav'>
        </div>
      <nav className="navigation">
        <Link to="/" className="navLink">List</Link> | 
        <Link to="/add" className="navLink">Add Player</Link>
      </nav>

      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th className="tableHeader">Team Name</th>
              <th className="tableHeader">Preferred Position</th>
              <th className="tableHeader">Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player._id}>
                <td className="tableCell">{player.name}</td>
                <td className="tableCell">{player.preferredPosition}</td>
                <td className="tableCell">
                  <button
                    className="deleteButton"
                    onClick={() => handleDelete(player._id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerList;
