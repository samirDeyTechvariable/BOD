import React, { lazy, Suspense } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import Route from 'base/Routes/PublicRoute';
import PrivateRoute from 'base/Routes/PrivateRoute';
import Loader from 'components/items/Loader';

const Homepage = lazy(() => import('pages/Homepage'));
const SchedulePage = lazy(() => import('pages/SchedulePage'));
const SignIn = lazy(() => import('pages/SignIn'));
const Profile = lazy(() => import('pages/Profile'));

const Routes = () => (
  <Router>
    <Suspense fallback={<Loader text="Lazy Loading... Please wait"></Loader>}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/schedulePage" component={SchedulePage} />
        <Route exact path="/sign-in" component={SignIn} />
        {/* <Route exact path="/sign-in" component={SignIn} /> */}
        <PrivateRoute exact path="/my-profile" component={Profile} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
