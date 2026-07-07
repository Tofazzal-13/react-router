import React, { use } from 'react';

const UsersDetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise)
    return (
        <div>
            <p><span>UserName: {username} </span></p>
            <p>{name}</p>
        </div>
    );
};

export default UsersDetails2;