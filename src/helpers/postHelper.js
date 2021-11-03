import axios from 'axios';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;

const deletePost = (postId) => new Promise((resolve) => {
  // TODO: Delete Post based on postId
  resolve({ postId });
});

const getAllPosts = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/posts.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export {
  deletePost, // eslint-disable-line
  getAllPosts,
};
