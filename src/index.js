import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import 'normalize.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import bg from './bg.jpg';

const fontUrl =
  "url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre:300,400,700')";

injectGlobal`
  @import ${fontUrl};

  body {
    font-family: 'Frank Ruhl Libre', serif;
    font-weight: 300;
    line-height: 1.3;
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
