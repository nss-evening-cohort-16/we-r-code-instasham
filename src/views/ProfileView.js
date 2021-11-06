import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileInfo from '../components/instasham-design-system/ProfileInfo';
import PostGrid from '../components/instasham-design-system/PostGrid';
import POSTJSON from '../sample_json/posts.json';
import { getCurrentUsersUid, getUserByUid } from '../helpers/userHelper';

export default function ProfileView() {
  const { user, setUser } = useState({});
  const { username } = useParams();
  useEffect(() => {
    const userUid = getCurrentUsersUid();
    getUserByUid(userUid).then(setUser);
    console.warn(user);
  }, []);
  return (
    <div>
      <h1>@{username}</h1>
      <ProfileInfo />
      <PostGrid posts={Object.values(POSTJSON)} />
    </div>
  );
}
