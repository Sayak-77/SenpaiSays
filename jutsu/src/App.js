import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import Books from './components/Books';
import Songs from './components/Songs';
import Myprofile from './components/Myprofile';
import Login from './components/Login';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books" element={<Books/>}/>
      <Route path="/songs" element={<Songs/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/myprofile" element={<Myprofile/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
