import axios from 'axios';
import firebase from 'firebase/app';
import firebaseConfig from './firebaseHelper';

const dbUrl = firebaseConfig.databaseURL;
const getCurrentUsersUid = () => firebase.auth().currentUser?.uid;

const getUserByUid = (uid) => new Promise((resolve, reject) => {
  // TODO: Get single user ingo based on uid
  axios
    .get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response.data))
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
  axios.get(`${dbUrl}/users/${userId}/bio.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getUserByUid,
  getCurrentUsersUid,
  updateBio,
  getSingleUserBio,
};
