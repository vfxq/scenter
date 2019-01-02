import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello';
require('./styles/style.scss');

ReactDOM.render(
  <Hello framework='React'/>, 
  document.getElementById('app')
);