import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Views
import App from './views/App';

// Setup by Web Progressive App
import * as serviceWorker from './serviceWorker';

// Css
import './index.css';

const RenderApp = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(RenderApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
