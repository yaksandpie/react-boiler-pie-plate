// Include the initial HTML file
// This is done only for Webpack copying it over to /dist.
import initialHTML from 'file?name=../[name].[ext]!../index.html';

import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <App />,
  document.getElementById('js-react_mount')
);
