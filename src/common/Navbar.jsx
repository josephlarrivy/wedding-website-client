import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { useEffect } from 'react';

import weddingIcon from '../images/wedding_icon_one.png'

const Navbar = ({ navbarStatus }) => {
  const navigateTo = useNavigate();

  // useEffect(() => {
  //   console.log(navbarStatus);
  // }, [navbarStatus]);

  return (
    <div id='navbar-container'>
      <div id='navbar-inner-container-left'>
        {/* {navbarStatus === 'big' ? (
          <>
            <div className='logo-group'>
              <div id='logo-letter' className='slide-in'>H</div>
              <div id='logo-word' className='slide-in'>eritage</div>
            </div>
            <div className='logo-group'>
              <div id='logo-letter' className='slide-in'>C</div>
              <div id='logo-word' className='slide-in'>apital</div>
            </div>
            <div className='logo-group'>
              <div id='logo-letter' className='slide-in'>F</div>
              <div id='logo-word' className='slide-in'>inance</div>
            </div>
          </>
        ) : (
          <>
            <div id='logo-letter'>H</div>
            <div id='logo-letter'>C</div>
            <div id='logo-letter'>F</div>
          </>
        )} */}
        <img src={weddingIcon}></img>
        <div id='logo-letter' onClick={() => navigateTo('/')}>Alex & Joe</div>
      </div>
      <div id='navbar-inner-container-right'>
        <p onClick={() => navigateTo('/')} className='nav-item'>Home</p>
        <p onClick={() => navigateTo('/location')} className='nav-item'>Location</p>
        <p onClick={() => navigateTo('/lodging')} className='nav-item'>Lodging</p>
        <p onClick={() => navigateTo('/eventdetails')} className='nav-item'>Details</p>
        {/* <p onClick={() => navigateTo('/rsvp')} className='nav-item'>RSVP</p> */}
      </div>
    </div>
  );
};

export default Navbar;