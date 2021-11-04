import React from 'react';
import styled from 'styled-components';
import { signOutUser } from '../../helpers/auth';

const ButtonStyle = styled.button`
  margin-left: 30px;
  margin-top: 35px;
`;

export default function LogoutButton() {
  return (
    <div>
      <ButtonStyle
        type="button"
        className="btn btn-danger"
        onClick={signOutUser}
      >
        Sign Out!
      </ButtonStyle>
    </div>
  );
}
