import axios from 'axios';
import firebaseConfig from './firebaseHelper';
import { getCurrentUsersUid } from './userHelper';

const dbUrl = firebaseConfig.databaseURL;

const userLikesPost = (postId) => new Promise((resolve, reject) => {
  // TODO: get whether or not current user likes post based on postId
  // const likes = Math.floor(Math.random() * 1000);
  axios.get(`${dbUrl}/hearts.json?orderBy="postID"&equalTo="${postId}"`)
    // .then((response) => console.warn(Object.values(response.data)))
    .then((response) => {
      const heartArray = Object.values(response.data);
      let heartInfo = {
        heartId: `${postId}`,
        total: heartArray.length,
        hearted: false,
      };
      heartArray.forEach((heart) => {
        if (heart.userId === getCurrentUsersUid()) {
          heartInfo = {
            heartId: `${postId}`, // Firebase key of relationship if hearted
            total: heartArray.length, // How many hearts post has total
            hearted: true, // boolean on if current user likes post
          };
        }
      });
      resolve(heartInfo);
    })
    .catch(reject);
  // resolve({
  //   heartId: `${postId}`, // Firebase key of relationship if hearted
  //   total: likes, // How many hearts post has total
  //   hearted: !!(likes % 2), // boolean on if current user likes post
  // });
  // }).catch(reject);
});

const heartPost = (postID) => new Promise((resolve) => {
  // TODO: Heart Post using passed in postID
  resolve({ postID });
});

const unheartPost = (firebaseKey) => new Promise((resolve) => {
  // TODO: Delete relationship
  resolve({ firebaseKey });
});

export {
  heartPost,
  unheartPost,
  userLikesPost,
};

// const heartPost = (postID) => new Promise((resolve) => {
//   // TODO: Heart Post using passed in postID
//   axios.post(`${dbURL}/hearts.json`, postID)
//     .then((response) => {
//       const heartID = response.data.name;
//       axios.patch(`${dbURL}/hearts/${heartID}.json`, { heartID })
//         .then(() => {
//           resolve({ postID });
//         });
//     });
// });
