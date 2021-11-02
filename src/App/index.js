import React from 'react';
// import {
//   // ProfileInfo,
// Navbar,
//   // PostDetailsCard,
//   // PostGrid,
//   // UsersList,
// } from '../components/instasham-design-system/Navbar';
import Navbar from '../components/instasham-design-system/Navbar';
import Routes from '../routes/index';
import './App.scss';
// import POSTJSON from '../sample_json/posts.json';
// import USERJSON from '../sample_json/users.json';

function App() {
  return (
    <>
      <Navbar userInfo={{ username: 'asd' }} />
      <div className="app-container">
        <Routes />
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
  );
}

export default App;
