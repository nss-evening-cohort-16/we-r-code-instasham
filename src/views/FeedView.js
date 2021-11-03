import React, { useState, useEffect } from 'react';
import PostDetailsCard from '../components/instasham-design-system/PostDetailsCard';
import POSTJSON from '../sample_json/posts.json';
import { getAllPosts } from '../helpers/postHelper';

export default function FeedView() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllPosts().then((postArray) => {
      if (isMounted) setPosts(postArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h2>PostDetailsCard</h2>
      {posts.map((post) => (
        <PostDetailsCard key={post.firebaseKey} post={post} setPosts={setPosts} postInfo={Object.values(POSTJSON)[0]} />
      ))}
    </div>
  );
}