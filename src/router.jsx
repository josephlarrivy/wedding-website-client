import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Info from './components/Info';
import Location from './components/Location';
import Contact from './components/Contact';
import RsvpLanding from './components/RsvpLanding';
import Lodging from './components/Lodging';
import RsvpInfo from './components/RsvpInfo';
import ViewRsvps from './components/ViewRsvps';
import EventDetails from './components/EventDetails';
import NewRsvp from './components/NewRsvp';
import NewViewRsvps from './components/NewViewRsvps';
import ConfirmOverlay from './components/ConfirmOverlay';


const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Location />} />
      <Route path="/lodging" element={<Lodging />} />
      <Route path="/eventdetails" element={<EventDetails />} />
      <Route path="/rsvp" element={<NewRsvp />} />
      <Route path="/showConfirm" element={<ConfirmOverlay />} />

      {/* <Route path="/rsvp" element={<RsvpLanding />} />
      <Route path="/rsvp/:invitationId" element={<RsvpInfo />} />
      <Route path="/viewAll/:viewType" element={<ViewRsvps />} /> */}

      {/* <Route path="/info" element={<Info />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}

      <Route path="/viewrsvps" element={<NewViewRsvps />}></Route>
    </Routes>
  )
}

export default Router;