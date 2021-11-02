import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { signInUser } from '../helpers/auth';

const LoginStyle = styled.div`
  width: 300px;
  height: 140px;
  margin: 300px auto;

  img {
    width: 100%;
    height: auto;
  }

  button {
    width: 300px;
    margin-top: 40px;
  }
`;

export default function SignIn({ user }) {
  return (
    <LoginStyle>
      {user === null ? (
        <h1>Loading...</h1>
      ) : (
        <div className="text-center mt-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/instasham-bb5ca.appspot.com/o/instasham.png?alt=media&amp;token=97d55556-6ddb-4bb8-8067-7c31a90bf467"
            alt="Cluttered Couch"
          />
          <button
            type="button"
            className="btn btn-success"
            onClick={signInUser}
          >
            Google Sign-In
          </button>
        </div>
      )}
    </LoginStyle>
  );
}

SignIn.propTypes = {
  user: PropTypes.node,
};

SignIn.defaultProps = {
  user: null,
};
