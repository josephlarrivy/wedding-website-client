import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { useEffect } from 'react';

const Navbar = ({ navbarStatus }) => {
  const navigateTo = useNavigate();

  useEffect(() => {
    console.log(navbarStatus);
  }, [navbarStatus]);

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
        <div id='logo-letter' onClick={() => navigateTo('/')}>Alex & Joe</div>
      </div>
      <div id='navbar-inner-container-right'>
        <p onClick={() => navigateTo('/')} className='nav-item'>Home</p>
        <p onClick={() => navigateTo('/location')} className='nav-item'>Location</p>
        {/* <p onClick={() => navigateTo('/rsvp')} className='nav-item'>RSVP</p> */}
        {/* <p onClick={() => navigateTo('/info')} className='nav-item'>Info</p> */}
        {/* <p onClick={() => navigateTo('/contact')} className='nav-item'>Contact</p> */}
      </div>
    </div>
  );
};

export default Navbar;