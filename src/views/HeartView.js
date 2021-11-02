import React from 'react';
import PostDetailsCard from '../components/instasham-design-system/PostDetailsCard';
import POSTJSON from '../sample_json/posts.json';

export default function HeartView() {
  return (
    <div>
      <PostDetailsCard postInfo={Object.values(POSTJSON)[0]} />
    </div>
  );
}
