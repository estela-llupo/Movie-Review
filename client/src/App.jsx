import {BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AddPlayer from './components/AddPlayer';
import ManagePlayers from './components/rpages/ManagePlayers';
import ManageStatus from './components/rpages/ManageStatus';
import './App.css';
function App() {
    
    return (
        <div>
            <BrowserRouter>
            <div className="nav">
            <Link to="/" className="navLink">Manage Players</Link> |
            <Link to="/status" className="navLink">Manage Player Status</Link>
            </div>
                <Routes>
                    <Route path="/" element={<ManagePlayers />} />
                    <Route path="/add" element={<AddPlayer />} />
                    <Route path="/status/:gameId" element={<ManageStatus />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;