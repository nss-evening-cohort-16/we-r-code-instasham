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

const getFollowingByUid = (uid) => new Promise((resolve, reject) => {
  // TODO: Get array of all the following based on uid
  axios
    .get(`${dbUrl}/relationships.json?orderBy="userId"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
  // console.warn(uid);
  // resolve([]);
});

const getIsFollowing = (userId) => new Promise((resolve, reject) => {
  // TODO: Get boolean of whether or not current user follows userId
  axios
    .get(`${dbUrl}/relationships.json?orderBy="userId"&equalTo="${userId}"`)
    .then(() => resolve(!!(Math.floor(Math.random() * 2) % 2)))
    .catch(reject);
  // console.warn(userId);
  // resolve(!!(Math.floor(Math.random() * 2) % 2));
});

const unfollowUser = (relationshipId) => new Promise((resolve) => {
  // TODO: unfollow user based on relationshipId - DONE I THINK
  axios.delete(`${dbUrl}/relationships/${relationshipId}/followingId.json`)
    .then(() => resolve(relationshipId));
});

const followUser = (userId) => new Promise((resolve) => {
  // TODO: Create relationship based on passed in userId - NOT DONE
  axios.post(`${dbUrl}/relationships/.json`, userId)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/relationships/${firebaseKey}.json`, { firebaseKey })
        .then(resolve({ userId }));
    });
});

export {
  getFollowersByUid,
  getFollowingByUid,
  getIsFollowing,
  unfollowUser,
  followUser,
};
