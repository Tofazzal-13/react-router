import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div style={{border:"2px solid yellow", padding:"10px", margin:"10px", borderRadius:"10px"}}>
            <h3>Title: {title} </h3>
            <p>{body} </p>
            <Link to={`/posts/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;