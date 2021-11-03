import axios from 'axios';
import firebaseConfig from './firebaseHelper';

const dbURL = firebaseConfig.databaseURL;

const getAllPosts = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/posts.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSinglePost = (postId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/posts/${postId}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deletePost = (postId) => new Promise((resolve) => {
  // TODO: Delete Post based on postId
  axios.delete(`${dbURL}/posts/${postId}.json`)
    .then(() => getAllPosts().then(resolve({ postId })));
});

export {
  deletePost,
  getAllPosts,
  getSinglePost,
};
