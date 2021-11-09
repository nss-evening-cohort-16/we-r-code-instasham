import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoutButton from '../components/we-r-code components/LogoutButton';
import SettingsForm from '../components/we-r-code components/SettingsForm';
import { getSingleUserBio } from '../helpers/userHelper';

const DivStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function SettingsView({ uid }) {
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleUserBio(uid).then(setEditItem);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DivStyle>
      <SettingsForm obj={editItem} uid={uid} />
      <LogoutButton />
    </DivStyle>
  );
}

SettingsView.propTypes = {
  uid: PropTypes.string.isRequired,
};
