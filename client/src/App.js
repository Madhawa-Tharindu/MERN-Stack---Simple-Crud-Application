import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetail from  './components/PostDetail';
import NavBar from './components/NavBar';

const App = () => {
  return (
    
    <Router>
      <div className="container">
        <NavBar />
    </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<CreatePost />} />
        <Route exact path="/post/edit/:id" element={<EditPost />} />
        <Route exact path="/post/:id" element={<PostDetail />} />
        </Routes>
    </Router>
  )
}

export default App;