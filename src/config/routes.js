import React from 'react';
import { Route, IndexRoute } from 'react-router';
import authRouteResolver from '../utils/auth';
import App from '../containers/App';
import Login from '../containers/Login';
import Rooms from '../containers/Rooms';
import SingleRoom from '../containers/SingleRoom';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Login} onEnter={authRouteResolver} />
    <Route path="rooms" component={Rooms} onEnter={authRouteResolver} />
    <Route path="rooms/:key" component={SingleRoom} onEnter={authRouteResolver} />
  </Route>
);

export default routes;
