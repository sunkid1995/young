import React from 'react';
import _ from 'lodash';
import { Switch, Route, useHistory } from 'react-router-dom';

// Constants
import { privateRouter } from '../constants';

const RenderRouter = () => {
  const history = useHistory();

  console.log('history:', history);

  const route = (item, index) => {
    return (
      <Route
        {...item}
        key={index}
      />
    );
  };

  return (
    <Switch>
      {_.map(privateRouter, route)}
    </Switch>
  );
};

export default RenderRouter;
