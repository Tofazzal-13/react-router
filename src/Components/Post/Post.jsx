import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }
    return (
        <div style={{ border: "2px solid yellow", padding: "10px", margin: "10px", borderRadius: "10px" }}>
            <h3>Title: {title} </h3>
            <p>{body} </p>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of: {id} </button>
        </div>
    );
};

export default Post;