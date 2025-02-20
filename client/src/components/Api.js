import axios from 'axios';
const API_URL = 'http://localhost:8000/api';

export const getPlayers = () => axios.get(`${API_URL}/players`);
export const addPlayer = (player) => axios.post(`${API_URL}/players`, player);
export const deletePlayer = (id) => axios.delete(`${API_URL}/players/${id}`);
export const updatePlayer = (id, game, status) => axios.put(`${API_URL}/players/${id}/status`,{ game, status});