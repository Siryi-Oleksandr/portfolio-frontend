import React, { FC } from 'react';

interface User {
  user: object;
}

const SearchItem: FC<User> = ({ user }) => {
  return <li></li>;
};

export default SearchItem;
