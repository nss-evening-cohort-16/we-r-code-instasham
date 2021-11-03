import axios from 'axios';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;

const getFollowersByUid = (uid) => new Promise((resolve, reject) => {
  // TODO: Get array of all the followers based on uid
  axios
    .get(`${dbUrl}/relationships.json?orderBy="userId"&equalTo="${uid}"`)
    .then((response) => {
      const returnedRelationships = Object.values(response.data);
      const findFollowers = (array) => array.map((follower) => (follower.followingId));
      resolve(findFollowers(returnedRelationships));
    })
    .catch(reject);
  console.warn(uid);
});

const getFollowingByUid = (uid) => new Promise((resolve) => {
  // TODO: Get array of all the following based on uid
  console.warn(uid);
  resolve([]);
});

const getIsFollowing = (userId) => new Promise((resolve) => {
  // TODO: Get boolean of whether or not current user follows userId
  console.warn(userId);
  resolve(!!(Math.floor(Math.random() * 2) % 2));
});

const unfollowUser = (relationshipId) => new Promise((resolve) => {
  // TODO: unfollow user based on relationshipId(firebasekey of relationship)
  // give key value pair of following and the value being a boolean
  // unfollow user changes the value to false
  resolve(relationshipId);
});

const followUser = (userId) => new Promise((resolve) => {
  // TODO: Create relationship based on passed in userId
  resolve({ userId });
});

export {
  getFollowersByUid,
  getFollowingByUid,
  getIsFollowing,
  unfollowUser,
  followUser,
};
