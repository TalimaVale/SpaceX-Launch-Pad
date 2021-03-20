import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LaunchList from '../components/LaunchList';
import LaunchDetails from '../components/LaunchDetails';
import CreateLaunch from '../components/CreateLaunch';
import Landing from '../components/Landing';

interface ISiteRouterProps {}

const SiteRouter: React.FunctionComponent<ISiteRouterProps> = () => {
  return (
    <Router>
      <Switch>
        <Route path='/launch-list/:launchId'>
          <LaunchDetails />
        </Route>
        <Route exact path='/launch-list'>
          <LaunchList />
        </Route>
        <Route path='/create-launch'>
          <CreateLaunch />
        </Route>
        <Route exact path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default SiteRouter;
