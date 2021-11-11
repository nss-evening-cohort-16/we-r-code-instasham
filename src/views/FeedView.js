import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostDetailsCard from '../components/instasham-design-system/PostDetailsCard';
// import { getFollowingByUid } from '../helpers/relationshipHelper';
import { getAllPosts } from '../helpers/postHelper';

export default function FeedView({ uid }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllPosts(uid).then((userPostsArray) => {
      if (isMounted) {
        setPosts(userPostsArray);
      }
    });
    // getFollowingByUid(uid).then((followingArray) => {
    //   if (isMounted) {
    //     followingArray.forEach((following) => {
    //       getAllPosts(following.followingId).then((followingPostsArray) => {
    //         allFollowingPosts = allFollowingPosts.concat(followingPostsArray);
    //         // console.warn(allFollowingPosts);
    //       });
    //     });
    //     setPosts(allFollowingPosts);
    //     console.warn(allFollowingPosts);
    //   }
    // });
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
