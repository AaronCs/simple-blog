import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Login from './components/login';
import Home from './containers/home';
import NewPost from './components/new_post';
import UserSettings from './components/user_settings';
import EnsureLoggedIn from './containers/ensure_logged_in';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='login' component={Login} />
    <Route component={EnsureLoggedIn}>
      <Route path='new' component={NewPost} />
      <Route path='settings' component={UserSettings} />
    </Route>
  </Route>
);
