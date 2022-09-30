/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchApiMissions } from './redux/missionsSlice';
import Missions from './components/missionsPage';
import Header from './components/Header';
import './index.css';
import Navbar from './components/navbar';
import RocketsPage from './components/rockets/rocketsPage';
import ProfilePage from './components/profilePage';

function App() {
  const API_MISSIONS = 'https://api.spacexdata.com/v3/missions';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiMissions(API_MISSIONS));
  });
  return (
    <div className="App">
      <Router className="App">
        <Header />
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/rockets" element={<RocketsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<h1>Don&apos;t exist</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
