import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { signInUser } from '../helpers/auth';

const LoginStyle = styled.div`
  width: 400px;
  height: 240px;
  display: flex;
  margin: 200px auto;

  .card {
    border-radius: 10px;
    border-color: #56d1ba;
    width: 400px;
    height: 240px;
    box-shadow: 5px 10px 18px #888888;
    padding: 10px;
    padding-top: 40px;
  }

  img {
    width: 100%;
    height: auto;
  }

  button {
    width: 100%;
    margin-top: 40px;
    background: white;
    color: #56d1ba;
    border-color: #56d1ba;
  }

  button:hover {
    background-color: #ffcc99;
    color: white;
    border-color: #ffcc99;
  }
`;

export default function SignIn({ user }) {
  return (
    <LoginStyle>
      {user === null ? (
        <h1>Loading...</h1>
      ) : (
        <div className="text-center mt-5 card">
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
