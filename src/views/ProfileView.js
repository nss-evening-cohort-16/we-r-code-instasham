import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileInfo from '../components/instasham-design-system/ProfileInfo';
import PostGrid from '../components/instasham-design-system/PostGrid';
// import POSTJSON from '../sample_json/posts.json';
import { getCurrentUsersUid, getUserByUid } from '../helpers/userHelper';
import { getAllPosts } from '../helpers/postHelper';
import { getFollowersByUid, getFollowingByUid } from '../helpers/relationshipHelper';

export default function ProfileView() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { username } = useParams();
  useEffect(() => {
    const currentUid = getCurrentUsersUid();
    getUserByUid(currentUid).then(setUser);
    getAllPosts(currentUid).then(setPosts);
    getFollowersByUid(currentUid).then(setFollowers);
    getFollowingByUid(currentUid).then(setFollowing);
  }, []);

  return (
    <div>
      <h1>@{username}</h1>
      <ProfileInfo fullName={user.fullName} bio={user.bio} profileImage={Number(user.profileImage)} followingCount={Number(following.length)} followerCount={Number(followers.length)} postsCount={Number(posts.length)} uid={user.uid} />
      <PostGrid posts={posts} key={posts.firebaseKey} />
    </div>
  );
}
