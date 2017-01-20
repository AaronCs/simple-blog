import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from './reducer_post.js';
import loginReducer from './reducer_login';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postReducer,
  login: loginReducer,
});

export default rootReducer;
