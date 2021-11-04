import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LogoutButton from '../components/we-r-code components/LogoutButton';
import SettingsForm from '../components/we-r-code components/SettingsForm';
import { getSingleUserBio } from '../helpers/userHelper';

const DivStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function SettingsView() {
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleUserBio().then(setEditItem);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DivStyle>
      <SettingsForm obj={editItem} />
      <LogoutButton />
    </DivStyle>
  );
}
