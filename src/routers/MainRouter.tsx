import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import LaunchList from '../components/LaunchList';
import CreateLaunch from '../components/CreateLaunch';
import Landing from '../components/Landing';

const RouterContainer = styled.div`
  width: 100vw;

  text-align: center;
`;

const StyledNav = styled.nav`
  margin: 0 auto;
  padding: 25px;

  background: rgba(0, 0, 0, 0.8);
`;

const StyledLink = styled(Link)`
  padding: 25px;
  color: white;
  text-decoration: none;
`;

interface IMainRouterProps {}

const MainRouter: React.FunctionComponent<IMainRouterProps> = (props) => {
  return (
    <RouterContainer>
      <Router>
        <StyledNav>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/launch-list'>Launch List</StyledLink>
          <StyledLink to='/create-launch'>Create Launch</StyledLink>
        </StyledNav>
        <Switch>
          <Route path='/launch-list'>
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
    </RouterContainer>
  );
};

export default MainRouter;
