// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const EditPost = () => {
//     const { id } = useParams();
//     const [post, setPost] = useState({
//         topic: '',
//         description: '',
//         postCategory: ''
//     });

//     useEffect(() => {
//         getPost();
//     }, []); // Fetch post data on component mount


  
//     const getPost = () => {
//         axios.get(`/post/${id}`)
//             .then(res => {
//                 if (res.data.success === true) {
//                     const postData = res.data.posts ? [res.data.posts] : []; // Assuming the API returns a single post
//                     setPost(postData);
//                 }
//             })
//             .catch(err => {
//                 console.error('Error fetching post:', err);
//                 // Handle error, e.g., redirect to error page
//             });
//     };

//     const handleChange = e => {
//         const { name, value } = e.target;
//         setPost(prevPost => ({
//             ...prevPost,
//             [name]: value
//         }));
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         axios.put(`/post/${id}`, post)
//             .then(res => {
//                 console.log('Post updated successfully:', res.data);
//                 // Handle success, e.g., redirect to post details page
//             })
//             .catch(err => {
//                 console.error('Error updating post:', err);
//                 // Handle error, e.g., show error message to user
//             });
//     };

//     return (
//         <div className="container">
//             <h1>Edit Post</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="topic">Topic</label>
//                     <input type="text" className="form-control" id="topic" name="topic" value={post.topic} onChange={handleChange} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="description">Description</label>
//                     <textarea className="form-control" id="description" name="description" value={post.description} onChange={handleChange}></textarea>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="postCategory">Post Category</label>
//                     <input type="text" className="form-control" id="postCategory" name="postCategory" value={post.postCategory} onChange={handleChange} />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default EditPost;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const EditPost = ({ match }) => {

//     const [topic, setTopic] = useState('');
//     const [description, setUpdatedDescription] = useState('');
//     const [postCategory, setUpdatedPostCategory] = useState('');

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const postId = window.location.pathname.split('/').pop();
//                 const response = await axios.get(`/post/${postId}`);
//                 const post = response.data.posts[0];
//                 setTopic(post.topic);
//                 setUpdatedDescription(post.description);
//                 setUpdatedPostCategory(post.postCategory);
//             } catch (error) {
//                 console.error('Error fetching post:', error);
//             }
//         };

//         fetchPost();
//     }, [match.params.id]);

//     const handleSubmit = async () => {
//         try {
//             const postId = window.location.pathname.split('/').pop();
//             const response = await axios.put(`/post/edit/${postId}`, {
//                 topic: setTopic,
//                 description: setUpdatedDescription,
//                 postCategory: setUpdatedPostCategory
//             });

//             console.log('Post updated successfully:', response.data);
//             // Handle success, e.g., redirect to post details page
//             if (response.status === 200) {
//                 alert('Post updated successfully!');
//               } else {
//                 alert('Failed to update post');
//               }
//         } catch (error) {
//             console.error('Error updating post:', error);
//             // Handle error, e.g., show error message to user
//         }
//     }

//     return (
//         <div className="container">
//         <h1>Create Post</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="topic" className="form-label">
//               Topic
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="topic"
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">
//               Description
//             </label>
//             <textarea
//               className="form-control"
//               id="description"
//               value={description}
//               onChange={(e) => setUpdatedDescription(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="postCategory" className="form-label">
//               Post Category
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="postCategory"
//               value={postCategory}
//               onChange={(e) => setUpdatedPostCategory(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     )
// }

// export default EditPost;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditPost = () => {
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');
    const [postCategory, setPostCategory] = useState('');

    useEffect(() => {
        const postId = window.location.pathname.split('/').pop();
        fetchPost(postId);
    }, []);

    const fetchPost = async (postId) => {
        try {
            const response = await axios.get(`/post/${postId}`);
            const post = response.data.posts[0];
            setTopic(post.topic);
            setDescription(post.description);
            setPostCategory(post.postCategory);
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postId = window.location.pathname.split('/').pop();
        try {
            const response = await axios.put(`/post/edit/${postId}`, {
                topic,
                description,
                postCategory
            });

            console.log('Post updated successfully:', response.data);
            // Handle success, e.g., redirect to post details page
            if (response.status === 200) {
                alert('Post updated successfully!');
            } else {
                alert('Failed to update post');
            }
        } catch (error) {
            console.error('Error updating post:', error);
            // Handle error, e.g., show error message to user
        }
    };

    return (
        <div className="container">
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">Topic</label>
                    <input type="text" className="form-control" id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} required placeholder={{}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="postCategory" className="form-label">Post Category</label>
                    <input type="text" className="form-control" id="postCategory" value={postCategory} onChange={(e) => setPostCategory(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default EditPost;
