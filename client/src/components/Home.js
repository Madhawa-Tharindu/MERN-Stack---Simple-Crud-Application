/*

// get an idea about the class component vs functional component
// initially I have created a class component for getting all post

import React, { Component } from 'react';
import axios from 'axios';
// axios is a promise based HTTP client for the browser and node.js

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    }
  }
  //componentDidMount() is invoked immediately after a component is mounted. 
  componentDidMount() {
    this.getPosts();
  }


  getPosts() {
    axios.get('http://localhost:8000/posts')
          .then(res => {
            if (res.data.success) {
              this.setState({
                posts: res.data.existingPosts
              })
              console.log(res.data, "data was received successfully!");
            }
          })
          .catch(err => {
            alert(err + "Error while fetching data");
          });
  }

  render() {
    return (
        <div>
            <h1>Posts</h1>
            {this.state.posts.map(post => (
              <div key={post.id}>
              <h2>{post.topic}</h2>
              <h2>{post.description}</h2>
              <h2>{post.postCategory}</h2>
            </div>
            ))}
        </div>
    )
}
} 


*/

// functional component using ES6 syntax
import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        if (res.data.success === true) {
          setPosts(res.data.existingPosts);
          console.log(res.data, "data was received successfully!");
        }
      })
      .catch((err) => {
        alert(err + "Error while fetching posts!");
      });
  };

  

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
              {posts.map((post, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{post.topic}</td>
                  <td>{post.description}</td>
                  <td>{post.postCategory}</td>
                  <td>
                    <button className="btn btn-primary">
                      <i className="fas fa-edit">&nbsp;Edit</i>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger">
                      <i className="fas fa-trash">&nbsp;Delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
