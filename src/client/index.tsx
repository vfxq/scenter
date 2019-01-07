import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app';
require('./styles/style.scss');
require('../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css');

ReactDOM.render(
  <App/>, 
  document.getElementById('app')
);