import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {

    const [topic, setTopic] = React.useState("");
    const [description, setDescription] = useState("");
    const [postCategory, setPostCategory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('/post/save', {
                topic,
                description,
                postCategory
            });
            
            console.log('Post created:', response.data);
            // Reset the form after successful submission
            setTopic('');
            setDescription('');
            setPostCategory('');
        } catch (error) {
            console.error('Error creating post:', error);
            // Handle error accordingly
        }
    };
  return (
    <div className="container">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="topic" className="form-label">
            Topic
          </label>
          <input
            type="text"
            className="form-control"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postCategory" className="form-label">
            Post Category
          </label>
          <input
            type="text"
            className="form-control"
            id="postCategory"
            value={postCategory}
            onChange={(e) => setPostCategory(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
