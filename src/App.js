import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import RocketsPage from './components/rocketsPage';
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
  return (
    <>
      <Navbar title="Space Traveler's Hub" routes={routes} />
      <div className="container">
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/categories" element={<MissionsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
