import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    return (
        <div>

            <h3>{post.title}</h3>
            <p>{post.body} </p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetails;