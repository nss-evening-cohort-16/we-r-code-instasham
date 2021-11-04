import React from 'react';
import { getFollowersByUid } from '../helpers/relationshipHelper';

export default function HomeTest() {
  return (
    <div>
      <h1>Home</h1>
      <button
        type="button"
        onClick={() => getFollowersByUid('pjuLURfOw8dhQJFax5p1dUOWf732').then(console.warn)}
      >
        Following?
      </button>
    </div>
  );
}
