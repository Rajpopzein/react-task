import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MoreInfo from './components/Moreinfo';

const App = () => (
  <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}>
          <Route path="moreinfo" element={<MoreInfo />} />
        </Route>
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
