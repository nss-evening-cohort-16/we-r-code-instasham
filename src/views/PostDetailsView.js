import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import PostDetailsCard from '../components/instasham-design-system/PostDetailsCard';
import { getSinglePost } from '../helpers/postHelper';

export default function PostDetailsView() {
  const [post, setPost] = useState({});
  const { postID } = useParams();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSinglePost(postID).then(setPost);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  // terenary to see if post has firebasekey if so render postdetails card if not loading text
  return (
    <div>
      { post.firebaseKey ? (
        <PostDetailsCard postInfo={post} />
      ) : ('...Loading')}
    </div>
  );
}
