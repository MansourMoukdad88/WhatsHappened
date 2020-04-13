import React from 'react';
import UserList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id:'u1',
      name:'Adam Smith',
      image:'https://fwcb.cfans.umn.edu/sites/fwcb.cfans.umn.edu/files/photo_a_landon.jpg',
      places:3
    }
  ];
  return <UserList items={USERS}/>;
};

export default Users;
