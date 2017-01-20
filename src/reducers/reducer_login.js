import { AUTH } from '../actions/index';

const INITIAL_STATE = {
  username: '',
  password: '',
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH:
      return {
        ...state,
        username: action.payload.username,
        pasword: action.payloade.password,
      };
    default:
    return state;
  }
}
