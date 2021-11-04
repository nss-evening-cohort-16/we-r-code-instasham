import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileView from '../views/ProfileView';
import FeedView from '../views/FeedView';
import HeartView from '../views/HeartView';
import PostDetailsView from '../views/PostDetailsView';
import BrowseView from '../views/BrowseView';
import CreateView from '../views/CreateView';
import EditPostView from '../views/EditPostView';
import SettingsView from '../views/SettingsView';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={FeedView} />
      <Route exact path="/browse" component={BrowseView} />
      <Route exact path="/create" component={CreateView} />
      <Route exact path="/hearts" component={HeartView} />
      <Route exact path="/sham/:username" component={ProfileView} />
      <Route exact path="/posts/:postID" component={PostDetailsView} />
      <Route exact path="/edit/:editPostId" component={EditPostView} />
      <Route exact path="/settings/" component={SettingsView} />
    </Switch>
  );
}
