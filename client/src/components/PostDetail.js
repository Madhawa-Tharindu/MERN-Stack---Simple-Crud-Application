import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {

    const [postDetail, setPostDetails] = useState([]);
    const { id } = useParams(); //get the id parameter from the URL

    useEffect(() => {
        getPostDetails();
    }, []);

    const getPostDetails = () => {
        axios
            .get(`/post/${id}`)
            .then((res) => {
                if (res.data.success === true) {
                   setPostDetails(res.data.posts ? [res.data.posts] : []); // Set postDetail to an array with a single post object
                    //console.log(postDetail);
                    console.log(res.data, "data was received successfully!");
                }
            })
            .catch((err) => {
                alert(err + "Error while fetching posts!");
            });
    
    }

    return (
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-10">
          {/* <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.topic}</h2>
          <h2>{post.description}</h2>
          <h2>{post.postCategory}</h2>
        </div>))} */}
           <h1>Post Details</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">post.topic</th>
                <th scope="col">post.description</th>
                <th scope="col">post.postCategory</th>
                <th scope="col">Action 1</th>
                <th scope="col">Action 2</th>
              </tr>
            </thead>
            <tbody>
              {postDetail.map((post, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{post.topic}</td>
                  <td>{post.description}</td>
                  <td>{post.postCategory}</td>
                  <td>
                    <Link>
                      <button className="btn btn-primary">
                        <i className="fas fa-edit">&nbsp;Edit</i>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <button className="btn btn-danger">
                        <i className="fas fa-trash">&nbsp;Delete</i>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link>
          <button className="btn btn-success">
            <i className="fas fa-pen">&nbsp;Create a Post</i>
          </button>
          </Link>
        </div>
      </div>
    </div>
    )
}

export default PostDetails;



// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';

// const PostDetails = () => {
//     const [postDetail, setPostDetails] = useState([]);
//     const { id } = useParams();

//     useEffect(() => {
//         const getPostDetails = async () => {
//             try {
//                 const response = await axios.get(`/post/${id}`);
//                 if (response.data.success === true) {
//                   setPostDetails(response.data.posts ? [response.data.posts] : []); // Set postDetail to an array with a single post object
//                     console.log(postDetail, "data was received successfully!");
//                 }
//             } catch (error) {
//                 console.error(error);
//                 alert(error + "Error while fetching posts!");
//                 setPostDetails([]);
//             }
//         };

//         getPostDetails(); // Call getPostDetails directly within useEffect

//     }, [id]); // Include id in the dependency array

//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-10">
//                     <h1>Post Details</h1>
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th scope="col">No</th>
//                                 <th scope="col">Topic</th>
//                                 <th scope="col">Description</th>
//                                 <th scope="col">Category</th>
//                                 <th scope="col">Action 1</th>
//                                 <th scope="col">Action 2</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//     {postDetail.map((post, index) => (
//         <tr key={index}>
//             <th scope="row">{index + 1}</th>
//             <td>{post.topic}</td>
//             <td>{post.description}</td>
//             <td>{post.postCategory}</td>
//             <td>
//                 <Link to={`/edit/${post.id}`}>
//                     <button className="btn btn-primary">
//                         <i className="fas fa-edit">&nbsp;Edit</i>
//                     </button>
//                 </Link>
//             </td>
//             <td>
//                 <Link to={`/delete/${post.id}`}>
//                     <button className="btn btn-danger">
//                         <i className="fas fa-trash">&nbsp;Delete</i>
//                     </button>
//                 </Link>
//             </td>
//         </tr>
//     ))}
// </tbody>
//                     </table>
//                     <Link>
//                         <button className="btn btn-success">
//                             <i className="fas fa-pen">&nbsp;Create a Post</i>
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PostDetails;
