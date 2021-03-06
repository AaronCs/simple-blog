import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import postReducer from './reducer_post';
import loginReducer from './reducer_login';
import formReducer from './reducer_form';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postReducer,
  login: loginReducer,
  router: routerReducer,
});

export default rootReducer;
