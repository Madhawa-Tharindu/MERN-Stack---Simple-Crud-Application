import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetails from  './components/PostDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<CreatePost />} />
        <Route exact path="/edit" element={<EditPost />} />
        <Route exact path="/post/:id" element={<PostDetails />} />
        </Routes>
    </Router>
  )
}

export default App;