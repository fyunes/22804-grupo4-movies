import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Peliculas from './components/Peliculas';
import Login from "./components/Login";
import Poster from './components/Poster';
import React from 'react';

function App() {
  return (
    <Routes>
      <Route path='/poster' element={<Poster />} />
      <Route path='/' element={<Login />} />
      <Route path='/movies' element={<Peliculas />} />
    </Routes>);
}

export default App;
