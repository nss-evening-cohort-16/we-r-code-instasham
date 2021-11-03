import React from 'react';
import UsersList from '../components/instasham-design-system/UsersList';
import USERJSON from '../sample_json/users.json';

export default function BrowseView() {
  return (
    <div>
      <UsersList userList={Object.values(USERJSON)} />
    </div>
  );
}
