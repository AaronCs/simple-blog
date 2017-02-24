import { combineReducers } from 'redux';
import postReducer from './reducer_post.js';
import loginReducer from './reducer_login';
import formReducer from './reducer_form';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postReducer,
  login: loginReducer,
});

export default rootReducer;
