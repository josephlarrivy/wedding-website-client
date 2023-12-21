import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import Navbar from './common/Navbar';
import './styles/App.css';

function App() {
  const [navbarStatus, setNavbarStatus] = useState('big');
  const [lowerFooterHeight, setLowerFooterHeight] = useState(0);
  const [upperFooterHeight, setUpperFooterHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Check if the user is scrolled to the top of the page
      if (scrollPosition === 0) {
        setNavbarStatus('big');
      } else {
        // User is scrolled down, set navbarStatus to 'small'
        setNavbarStatus('small');
      }

      // Check if the user is at the bottom of the page
      if (scrollPosition >= maxScroll - 10) {
        setUpperFooterHeight(120);
        setLowerFooterHeight(100);
      } else {
        setUpperFooterHeight(0);
        setLowerFooterHeight(0);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate dynamic styles based on navbarStatus
  const navbarHeight = navbarStatus === 'big' ? 80 : 20;
  const navbarPaddingTop = navbarStatus === 'big' ? 40 : 10;

  return (
    <div id='full-page-container'>
      <BrowserRouter>
        <div
          id='navbar-outer-container'
          style={{
            height: `${navbarHeight}px`,
            paddingTop: `${navbarPaddingTop}px`,
            zIndex: 1, // Set your desired z-index value
          }}
        >
          <Navbar navbarStatus={navbarStatus} />
        </div>

        <div id='content-outer-container'>
          <Router />
        </div>
        <div
          id='upper-footer-outer-container'
          style={{ height: `${upperFooterHeight}px`, paddingBottom: `${lowerFooterHeight * 2}px` }}>
          <p style={{ 'textAlign': 'center', 'fontSize': '30px' }}>June 29th, 2024</p>
          <p style={{ 'textAlign': 'center', 'fontSize': '30px' }}>Brule, WI</p>
        </div>
        {/* <div id='lower-footer-outer-container' style={{ height: `${lowerFooterHeight}px` }}>
          <p style={{ 'textAlign': 'center', 'fontSize': '30px', 'color': '#7f7f7f'}}>June 29th, 2024</p>
        </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
