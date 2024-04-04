import { useState } from 'react';
import '../styles/Rsvp.css'
import ApiClient from '../api/api';
import { useNavigate } from 'react-router-dom';

const NewRsvp = () => {

  const apiRequest = new ApiClient();
  const navigateTo = useNavigate()

  const [yourName, setYourName] = useState('');
  const [yourGuestsName, setYourGuestsName] = useState('');
  const [bringingChildren, setBringingChildren] = useState(false);
  const [attendingYourName, setAttendingYourName] = useState(true); // Default to attending
  const [attendingYourGuest, setAttendingYourGuest] = useState(true); // Default to attending

  const handleYourNameChange = (event) => {
    setYourName(event.target.value);
  };

  const handleYourGuestsNameChange = (event) => {
    setYourGuestsName(event.target.value);
  }

  const handleBringingChildrenChange = () => {
    setBringingChildren(!bringingChildren);
  }

  const handleYourNameAttendanceChange = (value) => {
    setAttendingYourName(value);
  };

  const handleYourGuestAttendanceChange = (value) => {
    setAttendingYourGuest(value);
  };

  const handleSubmit = async () => {
    console.groupCollapsed('api reqeust info')
    console.log('yourName', yourName);
    console.log("yourGuestsName", yourGuestsName);
    console.log("attendingYourName", attendingYourName);
    console.log("attendingYourGuest", attendingYourGuest);
    console.log("bringingChildren", bringingChildren);
    console.groupEnd()
    const response = await apiRequest.newSubmitRsvp(
      yourName, attendingYourName, yourGuestsName, attendingYourGuest, bringingChildren
    );
    console.log(response);
    if (response.status == 200) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: smooth scrolling animation
      });
      navigateTo('/showConfirm')
    }
  };

  return (
    <div id='rsvp-container'>

      <br />
      <br />
      <br />

      <h1>RSVP</h1>
      <p>Thank you for responding to our invitiation.</p>
      <p>Please complete the form below to RSVP.</p>
      <br />
      <br />

      <label htmlFor='your-name'>Your Name
        <br />
        <input
          type='text'
          id='your-name'
          value={yourName}
          onChange={handleYourNameChange}
        />
      </label>

      {/* <p>Your RSVP:</p> */}
      <br />
      <label htmlFor='your-name-attending'>
        <input
          type='radio'
          id='your-name-attending'
          name='your-name-rsvp'
          value='attending'
          checked={attendingYourName}
          onChange={() => handleYourNameAttendanceChange(true)}
        />
        Attending
      </label>
      <br />
      <label htmlFor='your-name-not-attending'>
        <input
          type='radio'
          id='your-name-not-attending'
          name='your-name-rsvp'
          value='not_attending'
          checked={!attendingYourName}
          onChange={() => handleYourNameAttendanceChange(false)}
        />
        Not Attending
      </label>

      <br />
      <br />
      <br />
      <br />

      <label htmlFor='your-guests-name'>Your Guest's Name
        <br />
        <input
          type='text'
          id='your-guests-name'
          value={yourGuestsName}
          onChange={handleYourGuestsNameChange}
        />
      </label>

      {/* <p>Your Guest's RSVP:</p> */}
      <br />
      <label htmlFor='your-guest-attending'>
        <input
          type='radio'
          id='your-guest-attending'
          name='your-guest-rsvp'
          value='attending'
          checked={attendingYourGuest}
          onChange={() => handleYourGuestAttendanceChange(true)}
        />
        Guest Attending
      </label>
      <br />
      <label htmlFor='your-guest-not-attending'>
        <input
          type='radio'
          id='your-guest-not-attending'
          name='your-guest-rsvp'
          value='not_attending'
          checked={!attendingYourGuest}
          onChange={() => handleYourGuestAttendanceChange(false)}
        />
        No Guest
      </label>

      <br />
      <br />
      <br />


      <p>Please check the box below if you will be bringing children.</p>
      <label htmlFor='children'>Bringing Children
        <br />
        <input
          type='checkbox'
          id='children'
          checked={bringingChildren}
          onChange={handleBringingChildrenChange}
        />
      </label>

      <br />
      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>

      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default NewRsvp;
