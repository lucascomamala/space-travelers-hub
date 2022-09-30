/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Badge, Card, Button,
} from 'react-bootstrap';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  const {
    id, rocketName, description, rocketImages, reserved,
  } = rocket;

  return (
    <div className="rocket-card">
      <img src={rocketImages[0]} alt="rocket" className="rocket-img" />
      <div className=" card-body">
        <Card.Title>{rocketName}</Card.Title>
        <Card.Text>
          {reserved ? <Badge bg="info" className="me-2">Reserved</Badge> : ''}
          {description}
        </Card.Text>
        <Button className="align-self-start" variant={reserved ? 'outline-secondary' : 'primary'} id={id}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rocketImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
