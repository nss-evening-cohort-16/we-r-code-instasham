import axios from 'axios';
import firebaseConfig from './firebaseHelper';

const dbURL = firebaseConfig.databaseURL;

const getAllPosts = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/posts.json?orderBy="userId"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSinglePost = (postId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/posts/${postId}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createPost = (postObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/posts.json`, postObject)
    .then((response) => {
      const postId = response.data.name;
      axios.patch(`${dbURL}/posts/${response.data.name}.json`, postId);
    })
    .then(() => getAllPosts().then(resolve))
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
  createPost,
};
