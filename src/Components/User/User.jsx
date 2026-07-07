import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UsersDetails2 from '../UsersDetails2/UsersDetails2';

const User = ({user}) => {
    const {id,name, email, phone} = user ;
    const [showinfo, setShowinfo] = useState(false)
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const userStyle = {
        border: "2px solid yellow",
        borderRadius: "20px",
        padding: "10px",
        margin: "10px"
    }
    return (
        <div style={userStyle}>
            <h3>{name} </h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone} </small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowinfo(!showinfo)}>{showinfo ? "hide" : "show"} info</button>
            {
                showinfo && <Suspense fallback={<span>Loading.....</span>}>
                    <UsersDetails2 userPromise= {userPromise}></UsersDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;