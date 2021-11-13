import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostDetailsCard from '../components/instasham-design-system/PostDetailsCard';
import { getAllPosts, getFollowingPosts } from '../helpers/postHelper';

export default function FeedView({ uid }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllPosts(uid).then((userPostsArray) => {
      if (isMounted) {
        console.warn('userpostsarray', userPostsArray);
        getFollowingPosts(uid).then((promiseArray) => {
          let followingPostsArray = [];
          promiseArray.forEach((promisePosts) => {
            followingPostsArray = followingPostsArray.concat(promisePosts);
          });
          const postsArray = followingPostsArray.concat(userPostsArray);
          console.warn(userPostsArray);
          console.warn(postsArray);
          setPosts(userPostsArray);
        });
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostDetailsCard key={post.firebaseKey} postInfo={post} />
      ))}
    </div>
  );
}

FeedView.propTypes = {
  uid: PropTypes.string,
};
FeedView.defaultProps = { uid: '' };
