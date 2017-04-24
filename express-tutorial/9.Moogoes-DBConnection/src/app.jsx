import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './components/HomePage.jsx';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';


ReactDom.render(( <Router history={browserHistory} routes={routes} />), document.getElementById('react-app'));