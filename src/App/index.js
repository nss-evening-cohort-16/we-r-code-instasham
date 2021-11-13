import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import {
//   // ProfileInfo,
// Navbar,
//   // PostDetailsCard,
//   // PostGrid,
//   // UsersList,
// } from '../components/instasham-design-system/Navbar';
import Navbar from '../components/instasham-design-system/Navbar';
import Routes from '../routes/index';
import Login from '../views/Login';
import './App.scss';
// import POSTJSON from '../sample_json/posts.json';
// import USERJSON from '../sample_json/users.json';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          uid: authed.uid,
          username: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <>
      {user ? (
        <>
          <Navbar userInfo={user} />
          <div className="app-container">
            <Routes userInfo={user} uid={user.uid} />
            {/* <h2>UserList</h2>
        <UsersList userList={Object.values(USERJSON)} />
        <h2>ProfileInfo</h2>
        <ProfileInfo
          postsCount={10}
          followerCount={10}
          followingCount={10}
          fullName="test"
          bio="asdasdasdasd"
          isUser={false}
        />
        <h2>PostDetailsCard</h2>
        <PostDetailsCard postInfo={Object.values(POSTJSON)[0]} />
        <h2>PostGrid</h2>
        <PostGrid posts={Object.values(POSTJSON)} /> */}
          </div>
        </>
      ) : (
        <Login user={user} />
      )}
    </>
  );
}

export default App;
