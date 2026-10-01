import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIQuote from './pages/AIQuote';
import Dealers from './pages/Dealers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-quote" element={<AIQuote />} />
          <Route path="/dealers" element={<Dealers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
