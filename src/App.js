import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchApiMissions } from './redux/missionsSlice';
import Missions from './components/missionsPage';
import Header from './components/Header';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import RocketsPage from './components/rockets/rocketsPage';
import MissionsPage from './components/missionsPage';
import ProfilePage from './components/profilePage';

const routes = [
  {
    id: 1,
    path: '/',
    name: 'Rockets',
  },
  {
    id: 2,
    path: '/categories',
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
    <><div className="App">
      <Router className="App">
        <Header />
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/*" element={<h1>Don&apos;t exist</h1>} />
        </Routes>
      </Router>
    </div><>
        <Navbar title="Space Traveler's Hub" routes={routes} />
        <div className="container">
          <Routes>
            <Route path="/" element={<RocketsPage />} />
            <Route path="/categories" element={<MissionsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </></>
  );
}

export default App;
