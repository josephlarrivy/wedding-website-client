import React, { useState } from 'react';

import '../styles/Rsvp.css'
import ApiClient from '../api/api'
import { useNavigate } from 'react-router-dom';

const RsvpLanding = () => {
  // State variables to store first and last names
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [error, setError] = useState(false)

  const apiCall = new ApiClient()
  const navigateTo = useNavigate()

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    let firstNameNormalized = firstName.trim().toLowerCase();
    let lastNameNormalized = lastName.trim().toLowerCase();
    try {
      const response = await apiCall.checkForName({ 
        "firstName": firstNameNormalized,
        "lastName": lastNameNormalized 
      });
      console.log(response);

      if (response.status == 200) {
        console.log(response.data.invitation_id)
        navigateTo(`/rsvp/${response.data.invitation_id}`)
      } else {
        setError(`We were not able to find ${firstName} ${lastName} in our reservations.`)
      }

    } catch (error) {
      console.error('Error in API request:', error);
      setError(`We were not able to find <b>${firstName} ${lastName}</b>.`)
    }
  };

  return (
    <div id='rsvp-container'>
      <br></br>
      <h1>RSVP</h1>
      <br></br>
      <p>Please enter your first and last name so that we can find your reservation.</p>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <br></br>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Last Name:
          <br></br>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {error &&
        <div>
          <p>{error}</p>
          <p>Please check your spelling.</p>
        </div>
      }
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default RsvpLanding;