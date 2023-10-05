import React from 'react'
import { Route, NavLink, Routes } from 'react-router-dom';

// Components
import Bio from './Bio.js';
import Projects from './Projects.js';
import Gallery from './Gallery.js';

function Hero() {
  return (
    <div className="container mx-auto flex flex-col h-screen">
      <div className="rounded-xl border shadow p-8 m-4 h-full">
        <p className="text-3xl text-gray-700 font-bold font-playfair mb-2">
          DANIEL KU.
        </p>
        <p className='text-gray-500 font-playfair'>SOFTWARE DEVELOPER</p>
        <nav className='mt-10'>
          <ul>
            <li>
              <NavLink 
                className={({ isActive }) => isActive ? "text-gray-500 font-playfair underline" : "text-gray-500 font-playfair" }
                to="/bio">BIO</NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => isActive ? "text-gray-500 font-playfair underline" : "text-gray-500 font-playfair" }
                to="/projects">WORK</NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => isActive ? "text-gray-500 font-playfair underline" : "text-gray-500 font-playfair" }
                to="/gallery">GALLERY</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/bio" element={<Bio/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>

      </div>
    </div>
  );
}

export default Hero