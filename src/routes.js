import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Login from './components/login';
import Home from './containers/home';
import newPost from './components/new_post';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='login' component={Login}/>
    <Route path='post/new' component={newPost} />
  </Route>
);
