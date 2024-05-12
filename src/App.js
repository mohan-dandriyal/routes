import react from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Service from './pages/Service';
import Skills from './pages/Skills';


function App() {

  return (
    <>
  <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

    </>
  );
}

export default App;
