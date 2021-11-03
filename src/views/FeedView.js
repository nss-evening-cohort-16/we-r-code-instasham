import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostDetailsCard from '../components/instasham-design-system/PostDetailsCard';
import { getAllPosts } from '../helpers/postHelper';
import POSTJSON from '../sample_json/posts.json';

export default function FeedView({ uid }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllPosts(uid).then((itemArray) => {
      if (isMounted) setPosts(itemArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {posts.forEach((post, i) => (
        <PostDetailsCard postInfo={Object.values(POSTJSON)[i]} />
      ))}
    </>
  );
}

FeedView.propTypes = {
  uid: PropTypes.string,
};

FeedView.defaultProps = { uid: '' };
