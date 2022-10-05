import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

// Actions
const FETCH_ROCKET = 'space-travelers-hub/rocketContainer/FETCH_ROCKET';
const RESERVE_ROCKET = 'space-travelers-hub/rocketContainer/RESERVATION';
const CANCEL_RESERVATION = 'space-travelers-hub/rocketContainer/CANCEL_RESERVATION';

// Action creators
const rocketsFetched = (rocket) => ({
  type: FETCH_ROCKET,
  payload: rocket,
});

const reserveRocket = (rocketId) => ({
  type: RESERVE_ROCKET,
  payload: rocketId,
});

const cancelRocketReservation = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

const fetchRockets = () => async (dispatch) => {
  const rockets = await axios.get(baseURL);
  const newState = rockets.data.map((rocket) => ({
    id: rocket.id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    rocketImages: rocket.flickr_images,
    reserved: false,
  }));
  dispatch(rocketsFetched(newState));
};

// Reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export {
  rocketsFetched,
  reserveRocket,
  cancelRocketReservation,
  fetchRockets,
};

export default rocketsReducer;
