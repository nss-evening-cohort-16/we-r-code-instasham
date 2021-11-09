import axios from 'axios';
import firebase from 'firebase/app';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;
const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

const getUserByUid = (uid) => new Promise((resolve, reject) => {
  // TODO: Get single user info based on uid
  axios
    .get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      let currentUserInfo = Object.values(response.data);
      currentUserInfo = currentUserInfo.shift();
      resolve(currentUserInfo);
    })
    .catch(reject);
  // const currentUserInfo = { uid };
  // resolve(currentUserInfo);
});

const updateBio = (bioObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/users/${bioObj.firebaseKey}.json`, bioObj)
    .then(() => resolve)
    .catch(reject);
});

const getSingleUserBio = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users/${userId}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getUserByUid,
  getCurrentUsersUid,
  updateBio,
  getSingleUserBio,
};
