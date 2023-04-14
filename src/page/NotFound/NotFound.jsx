import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <b>
      Page is not found :( Go to <Link to="/">Home</Link>
    </b>
  );
}
