import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileInfo from '../components/instasham-design-system/ProfileInfo';
import PostGrid from '../components/instasham-design-system/PostGrid';
import POSTJSON from '../sample_json/posts.json';

export default function ProfileView() {
  const { username } = useParams();
  return (
    <div>
      <h1>@{username}</h1>
      <ProfileInfo />
      <PostGrid posts={Object.values(POSTJSON)} />
    </div>
  );
}
