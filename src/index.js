import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import 'normalize.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import bg from './bg.jpg';

injectGlobal`
  body {
    background-image: url(${bg});
    width: 5837px;
    height: 1008px;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
