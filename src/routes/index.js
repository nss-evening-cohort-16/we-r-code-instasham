import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BrowseTest from '../testcomponents/BrowseTest';
import HomeTest from '../testcomponents/HomeTest';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeTest} />
      <Route exact path="/browse" component={BrowseTest} />
      <Route exact path="/create" component={HomeTest} />
      <Route exact path="/hearts" component={BrowseTest} />
    </Switch>
  );
}
