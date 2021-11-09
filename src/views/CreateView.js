import React from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/we-r-code components/PostForm';

export default function CreateView({ uid }) {
  return (
    <div>
      <PostForm uid={uid} />
    </div>
  );
}

CreateView.propTypes = {
  uid: PropTypes.string,
};
CreateView.defaultProps = { uid: '' };
