import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rocketsSlice';
import Rocket from './rocket';
import './rockets.css';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  });

  return (
    <div className="rockets-page">
      <div className="rockets-container">
        {rockets.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
};

export default RocketsPage;
