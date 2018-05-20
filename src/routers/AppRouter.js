import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MainPage from '../components/MainPage';
import UserPage from '../components/UserPage';
import NotFoundPage from '../components/NotFoundPage';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
      <Route path="/" component={MainPage} exact={true} />
      <Route path="/UserPage/:id" component={UserPage} />
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
