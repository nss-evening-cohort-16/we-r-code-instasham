import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostDetailsCard from '../components/instasham-design-system/PostDetailsCard';
// import POSTJSON from '../sample_json/posts.json';
import { getSinglePost } from '../helpers/postHelper';

export default function PostDetailsView() {
  const [post, setPost] = useState({});
  const { postID } = useParams();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSinglePost(postID).then(setPost);
      console.warn(post, postID);
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
