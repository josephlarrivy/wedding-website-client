import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiClient from "../api/api";

import '../styles/RsvpInfo.css'
import ConfirmOverlay from "./ConfirmOverlay";

const RsvpInfo = () => {

  const { invitationId } = useParams()

  const [personOneInfo, setPersonOneInfo] = useState({})
  const [personTwoInfo, setPersonTwoInfo] = useState({})

  const [personOneStatus, setPersonOneStatus] = useState('undecided')
  const [personTwoStatus, setPersonTwoStatus] = useState('undecided')
  const [inviteHasSecondGuest, setInviteHasSecondGuest] = useState(false)

  const [isBringingGuest, setIsBringingGuest] = useState(false);

  const [isBringingChildren, setIsBringingChildren] = useState();
  const [showConfirmOverlay, setShowConfirmOverlay] = useState(false)

  const apiCall = new ApiClient()

  useEffect(() => {
    const getInvitationInfo = async () => {

      const setAsViewedResponse = await apiCall.setInvitationAsViewed(invitationId)
      console.log(setAsViewedResponse)

      const response = await apiCall.getInvitationInfo(invitationId)
      console.log(response.data)

      if (response.data.length == 1) {
        setPersonOneInfo(response.data[0])
        if (response.data[0].will_be_attending == true) {
          setPersonOneStatus('attending')
        } else if (response.data[0].will_be_attending == false) {
          setPersonOneStatus('not attending')
        } else {
          setPersonOneStatus('undecided')
        }
      } else if (response.data.length == 2) {
        setInviteHasSecondGuest(true)
        setPersonOneInfo(response.data[0])
        setPersonTwoInfo(response.data[1])
        if (response.data[0].will_be_attending == true) {
          setPersonOneStatus('attending')
        } else if (response.data[0].will_be_attending == false) {
          setPersonOneStatus('not attending')
        } else {
          setPersonOneStatus('undecided')
        }
        if (response.data[1].will_be_attending == true) {
          setPersonTwoStatus('attending')
        } else if (response.data[1].will_be_attending == false) {
          setPersonTwoStatus('not attending')
        } else {
          setPersonTwoStatus('undecided')
        }
      }

      const respChildren = await apiCall.checkIfBringingChildren(invitationId)
      console.log("respChildren: ", respChildren)
      setIsBringingChildren(respChildren.data.bringing_children)

      const respGuest = await apiCall.checkIfBringingGuest(invitationId)
      console.log("respGuest: ", respGuest)
      setIsBringingGuest(respGuest.data.bringing_guest)

    }
    getInvitationInfo()
  }, [invitationId])


  const sendConfirmationPersonOne = async (personId, val) => {
    const response = await apiCall.sendConfirmAttendance(personId, val)
    console.log(response)
    if (response.data.will_be_attending == true) {
      setPersonOneStatus('attending')
    } else if (response.data.will_be_attending == false) {
      setPersonOneStatus('not attending')
    }
  }

  const sendConfirmationPersonTwo = async (personId, val) => {
    const response = await apiCall.sendConfirmAttendance(personId, val)
    console.log(response)
    if (response.data.will_be_attending == true) {
      setPersonTwoStatus('attending')
    } else if (response.data.will_be_attending == false) {
      setPersonTwoStatus('not attending')
    }
  }

  const confirm = async () => {

    const guestResponse = await apiCall.sendConfirmGuest(invitationId, isBringingGuest)
    console.log(guestResponse)

    const childrenResponse = await apiCall.sendConfirmChildren(invitationId, isBringingChildren)
    console.log(childrenResponse)

    const sendEmailResponse = await apiCall.sendNewSubmissionEmail({invitationId})
    console.log(sendEmailResponse)

    window.scrollTo(0, 0);
    setShowConfirmOverlay(true)
  }








  const handleIsBringingGuestChange = () => {
    setIsBringingGuest(!isBringingGuest)
  };

  const handleIsBringingChildrenChange = () => {
    setIsBringingChildren(!isBringingChildren);
  };

  // const handleGuestFirstNameChange = (e) => {
  //   setGuestFirstName(e.target.value);
  // };

  // const handleGuestLastNameChange = (e) => {
  //   setGuestLastName(e.target.value);
  // };

  if (showConfirmOverlay == true) {
    return (
      <ConfirmOverlay
        setShowConfirmOverlay={setShowConfirmOverlay}
      />
    )
  }

  return (
    <div id="rsvp-info-container">
      <br />
      <h1>RSVP for:</h1>
      <p>{personOneInfo.first_name} {personOneInfo.last_name}</p>
      <button
        className={personOneStatus == 'attending' ? 'light' : 'dark'}
        onClick={() => sendConfirmationPersonOne(personOneInfo.id, 'yes')}
      >{personOneInfo.first_name} will be attending
      </button>
      <br />
      <button
        className={personOneStatus == 'not attending' ? 'light' : 'dark'}
        onClick={() => sendConfirmationPersonOne(personOneInfo.id, 'no')}
      >{personOneInfo.first_name} will not be attending
      </button>
      {personTwoInfo.first_name ?
        <>
          <p>{personTwoInfo.first_name} {personTwoInfo.last_name}</p>
          <button
            className={personTwoStatus == 'attending' ? 'light' : 'dark'}
            onClick={() => sendConfirmationPersonTwo(personTwoInfo.id, 'yes')}
          >{personTwoInfo.first_name} will be attending
          </button>
          <br />
          <button
            className={personTwoStatus == 'not attending' ? 'light' : 'dark'}
            onClick={() => sendConfirmationPersonTwo(personTwoInfo.id, 'no')}
          >{personTwoInfo.first_name} will not be attending
          </button>
        </>
        : <>
          <br />
          <br />
          <p>Guest</p>
          <label>
            <input
              type="checkbox"
              checked={isBringingGuest}
              onChange={handleIsBringingGuestChange}
            />
            {personOneInfo.first_name} will be bringing a guest
          </label>
        </>
      }
      {/* {isBringingGuest == true &&
        <div>
          <label htmlFor="guestFirstName">Guest First Name:</label>
          <input
            type="text"
            id="guestFirstName"
            name="guestFirstName"
            value={guestFirstName}
            onChange={handleGuestFirstNameChange}
          />
          <br />
          <label htmlFor="guestLastName">Guest Last Name:</label>
          <input
            type="text"
            id="guestLastName"
            name="guestLastName"
            value={guestLastName}
            onChange={handleGuestLastNameChange}
          />
        </div>
      } */}
      <br />
      <br />
      <p>Children</p>
      <label>
        <input
          type="checkbox"
          checked={isBringingChildren}
          onChange={handleIsBringingChildrenChange}
        />
        Bringing Children
      </label>


      <div id="your-rsvp">
        <h2>Your RSVP</h2>
        {personOneStatus == 'attending' &&
          <p>{personOneInfo.first_name} will be attending</p>
        }
        {personOneStatus == 'not attending' &&
          <p>{personOneInfo.first_name} will not be attending</p>
        }
        {personTwoStatus == 'attending' &&
          <p>{personTwoInfo.first_name} will be attending</p>
        }
        {personTwoStatus == 'not attending' &&
          <p>{personTwoInfo.first_name} will not be attending</p>
        }
        {personOneStatus == 'undecided' &&
          <p>{personOneInfo.first_name} has not responded</p>
        }
        {personTwoInfo.first_name && personTwoStatus == 'undecided' &&
          <p>{personTwoInfo.first_name} has not responded</p>
        }
        {/* {inviteHasSecondGuest === false && isBringingGuest === true && (
          <div>
            {guestFirstName === '' || guestLastName === '' ? (
              <p>{personOneInfo.first_name} will be bringing a guest</p>
            ) : (
              <p>
                {personOneInfo.first_name} will be bringing {guestFirstName} {guestLastName}
              </p>
            )}
          </div>
        )} */}
        {/* {inviteHasSecondGuest == false && isBringingGuest === true
          ? <p>{personOneInfo.first_name} will be bringing a guest</p>
          : <p>{personOneInfo.first_name} will not be bringing a guest</p>
        } */}

        {/* {!inviteHasSecondGuest && isBringingGuest && (
          <p>{personOneInfo.first_name} will be bringing a guest</p>
        )}

        {!inviteHasSecondGuest && !isBringingGuest && (
          <p>{personOneInfo.first_name} will not be bringing a guest</p>
        )} */}

        {isBringingGuest == true
          ? <p>Will be bringing a guest</p>
          : <p id="not-bringing-children-standin">...</p>
        }

        {/* {inviteHasSecondGuest === false && isBringingGuest === false && (
          <p>{personOneInfo.first_name} will not be bringing a guest</p>
        )} */}

        {isBringingChildren == true
          ? <p>Will be bringing children</p>
          : <p id="not-bringing-children-standin">...</p>
        }
      </div>

      {/* {personOneStatus != 'undecided' && personTwoStatus != 'undecided' &&
        <button onClick={() => confirm()} id="rsvp-confirm-button">Confirm RSVP</button>
      }
      {personOneStatus != 'undecided' && isBringingGuest == true &&
        <button onClick={() => confirm()} id="rsvp-confirm-button">Confirm RSVP</button>
      }
      {personOneStatus != 'undecided' && isBringingGuest == false &&
        <button onClick={() => confirm()} id="rsvp-confirm-button">Confirm RSVP</button>
      } */}

      <button onClick={() => confirm()} id="rsvp-confirm-button">Confirm RSVP</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default RsvpInfo;