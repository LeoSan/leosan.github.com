import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Back from './pages/Back';
import Front from './pages/Front';
import IA from './pages/IA';
import Project from './pages/Project';
import Block from './pages/Block';


function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-neutral-700 bg-neutral-100 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/back" element={<Back />} />
          <Route path="/front" element={<Front />} />
          <Route path="/ia" element={<IA />} />
          <Route path="/project" element={<Project />} />
          <Route path="/block" element={<Block />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
