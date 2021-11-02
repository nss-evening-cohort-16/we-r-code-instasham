import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostForm from '../components/we-r-code components/PostForm';
import { getSinglePost } from '../helpers/postHelper';

export default function EditPostView() {
  const { editPostId } = useParams();
  const [editPost, setEditPost] = useState({});

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSinglePost(editPostId).then(setEditPost);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <PostForm obj={editPost} />
    </div>
  );
}
