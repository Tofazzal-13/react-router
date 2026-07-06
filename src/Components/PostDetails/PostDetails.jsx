import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body} </p>
        </div>
    );
};

export default PostDetails;