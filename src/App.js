/* Libs & Modules */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'

/* Pages & Components */
import Minter from './pages/Minter/Minter'
import About from './pages/About/About'
import Admin from './pages/Admin/Admin'
import ErrorPage from './pages/ErrorPage/ErrorPage'

/* Style */
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/mint" element={<Minter />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
export default App;
