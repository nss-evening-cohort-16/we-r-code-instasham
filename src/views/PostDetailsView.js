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
      console.warn('post:', post, 'postId:', postID);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <PostDetailsCard postInfo={post} />
    </div>
  );
}
// PostDetailsView.propTypes = {
//   postInfo: PropTypes.shape({
//     caption: PropTypes.string,
//     datePublished: PropTypes.string,
//     firebaseKey: PropTypes.string,
//     photoUrl: PropTypes.string,
//     userId: PropTypes.string,
//   }),
// };
// PostDetailsView.defaultProps = { postInfo: {} };
