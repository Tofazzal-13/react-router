import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log("users2 suspense data load : ",users);
    

    return (
        <div>
            <h3>this is users2 page</h3>
        </div>
    );
};

export default Users2;