import React from 'react';
import "./UsersList.css"
import UserItem from './UserItem';

const UserList = props => {
    if(props.item.length ===0) {
        return <div className="center">
            <h2>No User Found.</h2>
        </div>
    };

    {props.items.map(user => <UserItem key={user.id} id={user.id} name={user.name} image={user.image} eventCount={user.events} />)}
};

export default UserList;