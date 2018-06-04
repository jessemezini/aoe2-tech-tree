import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import 'normalize.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import bg from './bg.jpg';

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont,
    “Segoe UI”, “Roboto”, “Oxygen”, “Ubuntu”, “Cantarell”,
    “Fira Sans”, “Droid Sans”, “Helvetica Neue”,
    sans-serif;
    font-weight: 300;
    line-height: 1.4;
    color: #111111;
    background-color: #ebcb9c;
    background-image: url(${bg});
    background-repeat: repeat-x;
    width: 5837px;
    height: 1008px;
  }

  strong {
    font-weight: 700;
  }

  ul {
    padding-left: 20px;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
