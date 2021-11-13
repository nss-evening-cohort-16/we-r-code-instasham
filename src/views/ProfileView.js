import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import ProfileInfo from '../components/instasham-design-system/ProfileInfo';
import PostGrid from '../components/instasham-design-system/PostGrid';
import {
  // getCurrentUsersUid,
  // getUserByUid,
  getUserByUsername,
} from '../helpers/userHelper';
import { getAllPosts } from '../helpers/postHelper';
import { getFollowersByUid, getFollowingByUid } from '../helpers/relationshipHelper';

export default function ProfileView() {
  const [user, setUser] = useState({});
  const [uid, setUid] = useState('');
  const [posts, setPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { username } = useParams();
  useEffect(() => {
    getUserByUsername(username).then((response) => {
      setUser(response);
      const userUid = user.uid;
      setUid(userUid);
    });
    // const currentUserUid = getCurrentUsersUid();
    // getUserByUid(currentUserUid).then(setUser);
    getAllPosts(uid).then((response) => {
      console.warn(user);
      console.warn(user.uid);
      const userPosts = response;
      setPosts(userPosts);
    });
    getFollowersByUid(uid).then(setFollowers);
    getFollowingByUid(uid).then(setFollowing);
  }, [user]);

  return (
    <div>
      <h1>@{username}</h1>
      <ProfileInfo
        fullName={user.fullName}
        bio={user.bio}
        profileImage={user.profileImage}
        followingCount={Number(following.length)}
        followerCount={Number(followers.length)}
        postsCount={Number(posts.length)}
        // uid={uid}
        isUser
      />
      <PostGrid posts={posts} />
    </div>
  );
}
// ProfileView.propTypes = {
//   uid: PropTypes.string,
// };
// ProfileView.defaultProps = { uid: '' };
