import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIQuote from './pages/AIQuote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-quote" element={<AIQuote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
