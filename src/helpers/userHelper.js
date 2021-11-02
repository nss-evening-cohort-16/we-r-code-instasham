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

export {
  getUserByUid,
  getCurrentUsersUid,
};
