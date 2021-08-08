import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from '../routes';

import './Root.css';

import MainTemplate from '../templates/MainTemplate';

const HomePage = lazy(() => import('./HomePage'));
const RightLinePage = lazy(() => import('./RightLinePage'));
const NatureLinePage = lazy(() => import('./NatureLinePage'));

const Root = () => (
  <Router>
    <MainTemplate>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.rightLine} component={RightLinePage} />
          <Route path={routes.natureLine} component={NatureLinePage} />
        </Switch>
      </Suspense>
    </MainTemplate>
  </Router>
);

export default Root;
