import {
  LOGOUT,
  LOGIN,
} from '../actions/types';

const INITIAL_STATE = {
  username: 'Guest',
  loggedIn: false,
  token: 0,
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload.username.displayName,
        loggedIn: true,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        username: 'Guest',
        loggedIn: false,
        token: 0,
      };
    default:
    return state;
  }
}
