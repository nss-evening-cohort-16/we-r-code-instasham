import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ProfileView from '../views/ProfileView';
import FeedView from '../views/FeedView';
import HeartView from '../views/HeartView';
import PostDetailsView from '../views/PostDetailsView';
import BrowseView from '../views/BrowseView';
import CreateView from '../views/CreateView';
import EditPostView from '../views/EditPostView';
import SettingsView from '../views/SettingsView';

export default function Routes({ uid, userInfo }) {
  return (
    <Switch>
      <Route exact path="/" component={() => <FeedView uid={uid} />} />
      <Route exact path="/browse" component={BrowseView} />
      <Route exact path="/create" component={() => <CreateView uid={uid} />} />
      <Route exact path="/hearts" component={HeartView} />
      <Route exact path="/sham/:username" component={() => <ProfileView uid={uid} userInfo={userInfo} />} />
      <Route exact path="/posts/:postID" component={PostDetailsView} />
      <Route exact path="/edit/:editPostId" component={EditPostView} />
      <Route exact path="/settings" component={() => <SettingsView uid={uid} />} />
    </Switch>
  );
}

Routes.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    profileImage: PropTypes.string,
    fullName: PropTypes.string,
    uid: PropTypes.string,
  }),
  uid: PropTypes.string,
};
Routes.defaultProps = { uid: '', userInfo: {} };
