import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website, name} = user;
    
    return (
        <div>
            <h3>users details</h3>
            <p>Name: {name} </p>
            <p>Website: {website} </p>
        </div>
    );
};

export default UserDetails;