import React from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const Routes: React.FC = () => {
  const location = useLocation();

  function getHeaderHeight(): 'small' | 'large' {
    const { pathname } = location;
    return pathname !== '/' ? 'small' : 'large';
  }

  return (
    <>
      <Header size={getHeaderHeight()} />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/import" component={Import} />
      </Switch>
    </>
  );
};

export default Routes;
