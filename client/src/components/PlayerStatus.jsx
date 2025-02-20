import React, { useState, useEffect } from 'react';
import { getPlayers, updatePlayer } from './Api';

const PlayerStatus = () => {
  const [players, setPlayers] = useState([]);
  const [game, setGame] = useState(["game1", "game2", "game3"]);

  useEffect(() => {
    getPlayers().then(res => setPlayers(res.data));
  }, []);

  const handleStatusChange = (id, status) => {
    updatePlayer(id, game, status).then(() => {
      setPlayers(players.map(player => player.id === id ? { ...player, status: { ...player.status, [game]: status } } : player));
    })
  }

  return (
    <div className="container">
      <h2 className="title">Player Status - Game {game.slice(-1)}</h2>
      <div className="buttonGroup">
        <Link to="#" className="link" onClick={() => setGame("game1")}>Game 1</Link>
        <span className="separator">|</span>
        <Link to="#" className="link" onClick={() => setGame("game2")}>Game 2</Link>
        <span className="separator">|</span>
        <Link to="#" className="link" onClick={() => setGame("game3")}>Game 3</Link>
      </div>
      <h1>Player List</h1>
      <Link to="/add" className="navLink">Add Player</Link>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Team Name</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.length === 0 ? (
            <tr>
              <td colSpan="2">No players found.</td>
            </tr>
          ) : (
            players.map(player => (
              <tr key={player._id}>
                <td className="td">{player.name}</td>
                <td className="td">
                  <button
                    className={`statusButton ${player.status[game] === "Playing" ? "playing" : ""}`}
                  >
                    {/* Button content */}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatus;