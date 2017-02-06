import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './style/style.scss';

import rootReducer from './reducers/index';
import routes from './routes';
import { posts } from './firebase/index';

const initialState = {
    // Put firebase things here and then pass to store.
    posts: [{
      title: 'test',
      content: 'test',
      postId: '0',
      author: 'test',
    }]
};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.getElementById('container'));
