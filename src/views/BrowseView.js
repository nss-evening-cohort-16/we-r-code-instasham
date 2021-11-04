import React, { useState } from 'react';
import UsersList from '../components/instasham-design-system/UsersList';
import USERJSON from '../sample_json/users.json';

const getSearchItems = (searchTerm, users) => {
  if (!searchTerm) {
    return users;
  }
  return users.filter((user) => user.username.includes(searchTerm));
};
export default function BrowseView() {
  const users = Object.values(USERJSON);
  const [searchTerm, setSearchTerm] = useState('');
  const searchItems = getSearchItems(searchTerm, users);
  return (
    <>
      <div className="input-group rounded">
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search" />
        </span>
        <input
          type="text"
          className="form-control rounded"
          placeholder="Search Users"
          aria-label="Search Users"
          aria-describedby="search-users"
          onChange={(e) => { setSearchTerm(e.target.value); }}
        />
      </div>
      <div>
        <UsersList userList={searchItems} />
      </div>
    </>
  );
}
