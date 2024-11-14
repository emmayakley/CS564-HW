import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import List from './pages/List';
import Population from './pages/Population';
import Custom from './pages/Custom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/population" element={<Population />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
    </Router>
  );
};

export default App;
