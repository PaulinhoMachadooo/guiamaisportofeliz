import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import ComercioDetail from './pages/ComercioDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/categoria/:id" element={<CategoryDetail />} />
        <Route path="/comercio/:id" element={<ComercioDetail />} />
      </Routes>
    </Router>
  );
}

export default App;