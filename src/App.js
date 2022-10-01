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

const routes = [
  {
    id: 1,
    path: '/',
    name: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    name: 'Missions',
  },
  {
    id: 2,
    path: '/profile',
    name: 'My Profile',
  },
];

function App() {
  const API_MISSIONS = 'https://api.spacexdata.com/v3/missions';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiMissions(API_MISSIONS));
  });
  return (
    <div className="App">
      <Router className="App">
        <Header title="Space Travelers&apos; Hub" routes={routes} />
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<p>404 Page not found</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
