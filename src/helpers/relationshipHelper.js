import axios from 'axios';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;

const getFollowersByUid = (uid) => new Promise((resolve, reject) => {
  // TODO: Get array of all the followers based on uid
  axios
    .get(`${dbUrl}/relationships.json?orderBy="userId"&equalTo="${uid}"`)
    .then((response) => {
      const returnedRelationships = Object(response.data);
      // const followers = returnedRelationships.map(
      //   (follower) => follower.followingId,
      // );
      console.warn(returnedRelationships);
    })
    .then((response) => resolve([response]))
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
  // TODO: unfollow user based on relationshipId
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
