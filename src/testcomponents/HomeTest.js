import React from 'react';
import { getFollowersByUid } from '../helpers/relationshipHelper';

// const testUser = 'pjuLURfOw8dhQJFax5p1dUOWf732';

export default function HomeTest() {
  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={() => getFollowersByUid('pjuLURfOw8dhQJFax5p1dUOWf732')}>Following?</button>
    </div>
  );
}
