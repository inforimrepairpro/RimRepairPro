import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AIChat from './pages/AIChat';
import Dealers from './pages/Dealers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-quote" element={<Navigate to="/" replace />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/dealers" element={<Dealers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
