import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiClient from "../api/api";



const RsvpInfo = () => {

  const [personOneInfo, setPersonOneInfo] = useState({})
  const [personTwoInfo, setPersonTwoInfo] = useState({})

  const { invitationId } = useParams()
  const apiCall = new ApiClient()

  useEffect(() => {
    const getInvitationInfo = async () => {
      const response = await apiCall.getInvitationInfo(invitationId)
      console.log(response.data)
      if (response.data.length == 1) {
        setPersonOneInfo(response.data[0])
      } else if (response.data.length == 2) {
        setPersonOneInfo(response.data[0])
        setPersonTwoInfo(response.data[1])
      }
    }
    getInvitationInfo()
  }, [invitationId])

  const sendConfirmation = async (personId, val) => {
    const response = await apiCall.sendConfirmAttendance(personId, val)
    console.log(response)
  }

  return (
    <div id="rsvp-info-container">
      <h1>RSVP for:</h1>
      {/* <p>id: {personOneInfo.id}</p> */}
      <p>{personOneInfo.first_name} {personOneInfo.last_name}</p>
      <button
        onClick={() => sendConfirmation(personOneInfo.id, 'yes')}
        >{personOneInfo.first_name} will be attending
      </button>
      <button
        onClick={() => sendConfirmation(personOneInfo.id, 'no')}
      >{personOneInfo.first_name} will not be attending
      </button>
      {personTwoInfo &&
        <>
          <p>{personTwoInfo.first_name} {personTwoInfo.last_name}</p>
          <button>{personTwoInfo.first_name} will be attending</button>
          <button>{personTwoInfo.first_name} will not be attending</button>
        </>
      }
    </div>
  )
}

export default RsvpInfo;