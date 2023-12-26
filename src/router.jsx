import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Info from './components/Info';
import Location from './components/Location';
import Contact from './components/Contact';
import Rsvp from './components/Rsvp';
import Lodging from './components/Lodging';


const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Location />} />
      <Route path="/lodging" element={<Lodging />} />

      <Route path="/rsvp" element={<Rsvp />} />
      <Route path="/info" element={<Info />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Router;