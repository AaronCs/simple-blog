import {
  AWAITING_AUTH_RESPONSE,
  LOGOUT,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    default:
    return state;
  }
}
