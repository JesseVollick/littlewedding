import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { injectGlobal } from 'styled-components'

injectGlobal`
body {
  margin: 0;
  padding: 0;
  font-family: serif;
}
`





ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
