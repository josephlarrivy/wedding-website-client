import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiClient from "../api/api";

import '../styles/RsvpInfo.css'

const RsvpInfo = () => {

  const [personOneInfo, setPersonOneInfo] = useState({})
  const [personTwoInfo, setPersonTwoInfo] = useState({})

  const [personOneStatus, setPersonOneStatus] = useState('undecided')
  const [personTwoStatus, setPersonTwoStatus] = useState('undecided')

  const { invitationId } = useParams()
  const apiCall = new ApiClient()
  const navigateTo = useNavigate()

  useEffect(() => {
    const getInvitationInfo = async () => {
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
    }
    getInvitationInfo()
  }, [invitationId, personOneStatus, personTwoStatus])

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

  return (
    <div id="rsvp-info-container">
      <h1>RSVP for:</h1>
      <p>{personOneInfo.first_name} {personOneInfo.last_name}</p>

      {personOneStatus == 'undecided' &&
        <button
          onClick={() => sendConfirmationPersonOne(personOneInfo.id, 'yes')}
        >{personOneInfo.first_name} will be attending
        </button>
      }
      <br />
      {personOneStatus == 'undecided' &&
        <button
          onClick={() => sendConfirmationPersonOne(personOneInfo.id, 'no')}
        >{personOneInfo.first_name} will not be attending
        </button>
      }

      {personOneStatus == 'not attending' &&
        <button
          onClick={() => sendConfirmationPersonOne(personOneInfo.id, 'yes')}
        >{personOneInfo.first_name} will be attending
        </button>
      }

      {personOneStatus == 'attending' &&
        <button
          onClick={() => sendConfirmationPersonOne(personOneInfo.id, 'no')}
        >{personOneInfo.first_name} will not be attending
        </button>
      }

      {personTwoInfo &&
        <>
          <p>{personTwoInfo.first_name} {personTwoInfo.last_name}</p>

          {personTwoStatus == 'undecided' &&
            <button
            onClick={() => sendConfirmationPersonTwo(personTwoInfo.id, 'yes')}
            >{personTwoInfo.first_name} will be attending
            </button>
          }
          <br />
          {personTwoStatus == 'undecided' &&
            <button
              onClick={() => sendConfirmationPersonTwo(personTwoInfo.id, 'no')}
            >{personTwoInfo.first_name} will not be attending
            </button>
          }
          
          {personTwoStatus == 'not attending' &&
            <button
              onClick={() => sendConfirmationPersonTwo(personTwoInfo.id, 'yes')}
            >{personTwoInfo.first_name} will be attending
            </button>
          }

          {personTwoStatus == 'attending' &&
            <button
              onClick={() => sendConfirmationPersonTwo(personTwoInfo.id, 'no')}
            >{personTwoInfo.first_name} will not be attending
            </button>
          }
        </>
      }

      <div id="your-rsvp">
        <h4>Your RSVP</h4>
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
          <p>...</p>
        }
        {personTwoStatus == 'undecided' &&
          <p>...</p>
        }
      </div>

      {personOneStatus != 'undecided' && personTwoStatus != 'undecided' &&
        <button onClick={() => navigateTo('/')} id="rsvp-confirm-button">Confirm RSVP</button>
      }
    </div>
  )
}

export default RsvpInfo;