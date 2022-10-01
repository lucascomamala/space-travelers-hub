/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Badge, Card, Button,
} from 'react-bootstrap';
import { reserveRocket, cancelRocketReservation } from '../../redux/rocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    id, rocketName, description, rocketImages, reserved,
  } = rocket;

  const handleReserve = (e) => {
    if (!reserved) {
      dispatch(reserveRocket(+e.target.id));
    } else {
      dispatch(cancelRocketReservation(+e.target.id));
    }
  };

  return (
    <div className="rocket-card">
      <img src={rocketImages[0]} alt="rocket" className="rocket-img" />
      <div className=" card-body">
        <h4>{rocketName}</h4>
        <Card.Text>
          {reserved ? <Badge bg="info" className="me-2">Reserved</Badge> : ''}
          {description}
        </Card.Text>
        <Button className="align-self-start" variant={reserved ? 'outline-secondary' : 'primary'} id={id} onClick={handleReserve}>
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
