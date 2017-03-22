import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';

const containerEl = document.getElementById('container');

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    containerEl
  );

render(Index);
if(module.hot) module.hot.accept('./index', () => {
  render(Index);
});
