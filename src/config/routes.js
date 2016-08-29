import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import Login from '../containers/Login';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
  </Route>
);

export default routes;