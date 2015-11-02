import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Dashboard from './views/Dashboard';

render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Dashboard} />
  </Router>
), document.getElementById('root'));
