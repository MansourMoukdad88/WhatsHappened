import React from 'react';
import UserList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id:'u1',
      name:'Mansour Almoukdad',
      image:'http://www.xwebtools.com/dummy-image/600x400/000/FFF',
      places:3
    }
  ];
  return <UserList items={USERS}/>;
};

export default Users;
