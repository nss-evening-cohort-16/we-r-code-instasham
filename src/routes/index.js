import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={} />
      <Route exact path="/browse" component={} />
      <Route exact path="/create" component={} />
      <Route exact path="/hearts" component={} />
    </Switch>
  );
}
