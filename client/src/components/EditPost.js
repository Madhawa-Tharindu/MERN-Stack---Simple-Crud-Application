// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditPost = () => {

//     const [topic, setTopic] = useState('');
//     const [description, setDescription] = useState('');
//     const [postCategory, setPostCategory] = useState('');

//     useEffect(() => {
//         const postId = window.location.pathname.split('/').pop();
//         fetchPost(postId);
//     }, []);

//     const fetchPost = async (postId) => {
//         try {
//             const response = await axios.get(`/post/${postId}`);
//             const post = response.data.posts[0];
//             setTopic(post.topic);
//             setDescription(post.description);
//             setPostCategory(post.postCategory);
//         } catch (error) {
//             console.error('Error fetching post:', error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const postId = window.location.pathname.split('/').pop();
//         try {
//             const response = await axios.put(`/post/edit/${postId}`, {
//                 topic,
//                 description,
//                 postCategory
//             });

//             console.log('Post updated successfully:', response.data);
//             // Handle success, e.g., redirect to post details page
//             if (response.status === 200) {
//                 alert('Post updated successfully!');
//             } else {
//                 alert('Failed to update post');
//             }
//         } catch (error) {
//             console.error('Error updating post:', error);
//             // Handle error, e.g., show error message to user
//         }
//     };

//     return (
//         <div className="container">
//             <h1>Edit Post</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="topic" className="form-label">Topic</label>
//                     <input type="text" className="form-control" id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="description" className="form-label">Description</label>
//                     <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="postCategory" className="form-label">Post Category</label>
//                     <input type="text" className="form-control" id="postCategory" value={postCategory} onChange={(e) => setPostCategory(e.target.value)} required />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default EditPost;



// import React, { useState, useEffect } from 'react';

// const EditPost = () => {
//     const [postData, setPostData] = useState({
//         topic: '',
//         description: '',
//         topicCategory: ''
//       });

//     useEffect(() => {
//             const postId = window.location.pathname.split('/').pop();
//             fetch(`http://localhost:8000/post/${postId}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     setPostData(data);
//                     console.log(data);
//                 })
//                 .catch(error => console.error('Error fetching data:', error));
//         }, []);

//       const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setPostData({
//           ...postData,
//           [name]: value
//         });
//       };

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you can send the edited data to your API
//         console.log('Edited data:', postData);
        
//       };

//     return (
//         <div className="container">
//             <h1>Edit Post</h1>
//             <form onSubmit={handleSubmit}>
//                 {postData.map((data, index) => {
//                     return (
//                         <div key={index}>
//                            <div className="mb-3">
//                     <label htmlFor="topic" className="form-label">Topic</label>
//                     <input type="text" className="form-control" id="topic" value={data.topic} onChange={handleInputChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="description" className="form-label">Description</label>
//                     <textarea className="form-control" id="description" value={data.description} onChange={handleInputChange} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="postCategory" className="form-label">Post Category</label>
//                     <input type="text" className="form-control" id="postCategory" value={data.postCategory} onChange={handleInputChange} required />
//                 </div>
//                         </div>
//                     )
//                 })}
                
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div> 
//     )
// }
// export default EditPost;



import React, { useState, useEffect } from 'react';

const EditPost = () => {
    const [postData, setPostData] = useState({
        topic: '',
        description: '',
        topicCategory: ''
    });

    useEffect(() => {
        const postId = window.location.pathname.split('/').pop();
        fetch(`http://localhost:8000/post/${postId}`)
            .then(response => response.json())
            .then(data => {
                setPostData(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the edited data to your API
        console.log('Edited data:', postData);
    };

    return (
        <div className="container">
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">Topic</label>
                    <input type="text" className="form-control" id="topic" name="topic" value={postData.topic} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" value={postData.description} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="topicCategory" className="form-label">Topic Category</label>
                    <input type="text" className="form-control" id="topicCategory" name="topicCategory" value={postData.topicCategory} onChange={handleInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default EditPost;
