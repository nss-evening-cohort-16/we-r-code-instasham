import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BrowseTest from '../testcomponents/BrowseTest';
import HomeTest from '../testcomponents/HomeTest';
import FeedView from '../views/FeedView';

export default function Routes({ uid }) {
  return (
    <Switch>
      <Route exact path="/" component={FeedView} uid={uid} />
      <Route exact path="/browse" component={BrowseTest} />
      <Route exact path="/create" component={HomeTest} />
      <Route exact path="/hearts" component={BrowseTest} />
    </Switch>
  );
}

Routes.propTypes = {
  uid: PropTypes.string,
};
Routes.defaultProps = { uid: '' };
