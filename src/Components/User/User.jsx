import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UsersDetails2 from '../UsersDetails2/UsersDetails2';

const User = ({user}) => {
    const {id,name, email, phone} = user ;
    const [showinfo, setShowinfo] = useState(false)
    const [visitHome, setVisitHome] = useState(false)
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
    const location = useLocation();
    console.log(location);
    

    const userStyle = {
        border: "2px solid yellow",
        borderRadius: "20px",
        padding: "10px",
        margin: "10px"
    }
    if(visitHome){
        return <Navigate to={"/"}></Navigate>
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
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;