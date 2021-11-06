import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  return (
    <div>
      { post.firebaseKey ? (
        <PostDetailsCard postInfo={post} />
      ) : ('...Loading')}
    </div>
  );
}
