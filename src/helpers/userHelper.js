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

const getUserByUsername = (username) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/users.json?orderBy="username"&equalTo="${username}"`)
    .then((response) => {
      let usernameObject = Object.values(response.data);
      usernameObject = usernameObject.shift();
      resolve(usernameObject);
    })
    .catch(reject);
});

export { getUserByUid, getCurrentUsersUid, getUserByUsername };
