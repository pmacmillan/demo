import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import Game from './containers/Game'
import DevTools from './containers/DevTools'

import { Provider } from 'react-redux'
import { default as createTicTacStore } from './store'

ReactDOM.render(
  <Provider store={ createTicTacStore() }>
    <div>
      <Game />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
