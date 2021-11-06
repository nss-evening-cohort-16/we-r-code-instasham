import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostDetailsCard from '../components/instasham-design-system/PostDetailsCard';
import { getAllPosts } from '../helpers/postHelper';

export default function FeedView({ uid }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllPosts(uid).then((postArray) => {
      if (isMounted) setPosts(postArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostDetailsCard
          key={post.firebaseKey}
          postInfo={post}
        />
      ))}
    </div>
  );
}

FeedView.propTypes = {
  uid: PropTypes.string,
};
FeedView.defaultProps = { uid: '' };
