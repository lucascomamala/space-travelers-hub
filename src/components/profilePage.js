import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/missionsSlice';

const WrapperProfile = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1rem auto;
  width: 90%;
  max-width: 70rem;
  text-align: left;
  gap: 0.5rem;
`;

const WrapperCards = styled.div`
  flex: 1;
`;

const ContainerCard = styled.div`
  border: 1px solid gray;
  flex: 1;
  border-radius: 3px;
  padding: 1rem;
  margin-top: 0.25rem;
`;

function Profile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector(selectMissions);
  return (
    <WrapperProfile>
      <WrapperCards>
        <h2>My Missions</h2>
        {missions.map(
          (mission) => mission.join && <Card key={mission.id} name={mission.name} />,
        )}
      </WrapperCards>
      <WrapperCards>
        <h2>My Rockets</h2>
        {rockets.map(
          (rocket) => rocket.reserved && <Card key={rocket.id} name={rocket.rocketName} />,
        )}
      </WrapperCards>
    </WrapperProfile>
  );
}

const Card = (props) => {
  const { name } = props;
  return (
    <ContainerCard>
      <h3>{name}</h3>
    </ContainerCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Profile;
