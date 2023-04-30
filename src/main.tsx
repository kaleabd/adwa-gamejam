import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import './index.css';
import Howto from './pages/Howto.tsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/play' element={<App />} />
        <Route path='/' element={<Home />} />
        <Route path='/howto' element={<Howto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
