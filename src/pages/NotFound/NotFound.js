import React from 'react';

import { useSelector } from 'react-redux';

const NotFound = () => {
  const { error } = useSelector(state => state.auth);
  console.log(error);
  return <div>{!error && <h2 className="error">Server Error!</h2>}</div>;
};

export default NotFound;

console.log(typeof null);
