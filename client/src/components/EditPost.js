import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({
        topic: '',
        description: '',
        postCategory: ''
    });

    useEffect(() => {
        getPost();
    }, []); // Fetch post data on component mount

    const getPost = () => {
        axios.get(`/post/${id}`)
            .then(res => {
                if (res.data.success === true) {
                    const postData = res.data.posts[0]; // Assuming the API returns a single post
                    setPost({
                        topic: postData.topic,
                        description: postData.description,
                        postCategory: postData.postCategory
                    });
                }
            })
            .catch(err => {
                console.error('Error fetching post:', err);
                // Handle error, e.g., redirect to error page
            });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setPost(prevPost => ({
            ...prevPost,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Add logic to submit edited post data
        console.log('Edited post:', post);
        // Redirect or show success message after submitting
    };

    return (
        <div className="container">
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="topic">Topic</label>
                    <input type="text" className="form-control" id="topic" name="topic" value={post.topic} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" value={post.description} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="postCategory">Post Category</label>
                    <input type="text" className="form-control" id="postCategory" name="postCategory" value={post.postCategory} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default EditPost;
// In this EditPost component, we first import the necessary React hooks and axios for 
//making HTTP requests. We then define a functional component EditPost that fetches the post data to be edited 
//using the useParams hook to get the post ID from the URL. We use the useEffect hook to fetch the post data when the component mounts.