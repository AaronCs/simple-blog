import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import './style/style.scss';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import routes from './routes';
import { posts } from './firebase/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    // Put firebase things here and then pass to store.
};

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, initialState, composeEnhancers(middleware));

function configureStore(store) {
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }
}

export default class Index extends Component {
    render() {
      return (
        <Provider store={store}>
          <Router history={browserHistory} routes={routes}/>
        </Provider>
      );
    }
}
