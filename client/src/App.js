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
      <Routes>
        <div className='container'>
          <NavBar />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<CreatePost />} />
        <Route exact path="/edit" element={<EditPost />} />
        <Route exact path="/post/:id" element={<PostDetail />} />
        </div>
        </Routes>
    </Router>
  )
}

export default App;