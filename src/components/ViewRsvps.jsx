import { useEffect, useState } from "react";

import ApiClient from "../api/api";

import weddingIcon from '../images/wedding_icon_one.png'

import '../styles/ViewRsvps.css'

const ViewRsvps = () => {

  const [invitations, setInvitations] = useState(null)

  const apiCall = new ApiClient()

  useEffect(() => {
    const getAllData = async () => {
      const response = await apiCall.viewRsvps()
      console.log(response.data)
      setInvitations(response.data)
    }
    getAllData()
  }, [])

  return (
    <div id="page-container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>View RSVPs</h1>
      <div id="invitations-container">
        <br />
        <p><b>Invitations that have been viewed</b></p>
        <div className="boxes-container">
        {invitations &&
          invitations.map((invitation) => {
            if (invitation.invitation_has_been_viewed === true) {
              return (
                <div key={invitation.id} className="single-invitation">
                  <div className="people-container">
                    <div className="person-line">
                      <p>{invitation.people[0].first_name} {invitation.people[0].last_name}</p>
                      {invitation.people[0].will_be_attending == null &&
                        <p>has not responded</p>
                      }
                      {invitation.people[0].will_be_attending == true &&
                        <p>attending</p>
                      }
                      {invitation.people[0].will_be_attending == false &&
                        <p>not attending</p>
                      }
                    </div>
                    {invitation.people.length == 2 && (
                    <div className="person-line">
                      <p>{invitation.people[1]?.first_name} {invitation.people[1]?.last_name}</p>
                      {invitation.people[1]?.will_be_attending == null &&
                        <p>has not responded</p>
                      }
                      {invitation.people[1]?.will_be_attending == true &&
                        <p>attending</p>
                      }
                      {invitation.people[1]?.will_be_attending == false &&
                        <p>not attending</p>
                      }
                    </div>
                  )}

                    {invitation.people.length == 1 && (
                      invitation.bringing_guest == true
                        ? <p className="guest-status">bringing guest</p>
                        : <p className="guest-status">not bringing guest</p>)
                    }
                  </div>
                  {invitation.bringing_children == true
                    ? <p>bringing children</p>
                    : <p className="invisible-line">not bringing children</p>
                  }
                </div>
              );
            } else {
              return null; // or any other content you want to display for unread invitations
            }
          })}
        </div>
        <br />
        <p><b>Invitations that have not been viewed</b></p>
        <div className="boxes-container">
          {invitations &&
            invitations.map((invitation) => {
              if (invitation.invitation_has_been_viewed === false) {
                return (
                  <div key={invitation.id} className="single-invitation">
                    <div className="people-container">
                      <div className="person-line">
                        <p>{invitation.people[0].first_name} {invitation.people[0].last_name}</p>
                        {invitation.people[0].will_be_attending == null &&
                          <p>has not responded</p>
                        }
                        {invitation.people[0].will_be_attending == true &&
                          <p>attending</p>
                        }
                        {invitation.people[0].will_be_attending == false &&
                          <p>not attending</p>
                        }
                      </div>
                      {invitation.people.length == 2 && (
                        <div className="person-line">
                          <p>{invitation.people[1]?.first_name} {invitation.people[1]?.last_name}</p>
                          {invitation.people[1]?.will_be_attending == null &&
                            <p>has not responded</p>
                          }
                          {invitation.people[1]?.will_be_attending == true &&
                            <p>attending</p>
                          }
                          {invitation.people[1]?.will_be_attending == false &&
                            <p>not attending</p>
                          }
                        </div>
                      )}

                      {invitation.people.length == 1 && (
                        invitation.bringing_guest == true
                          ? <p className="guest-status">bringing guest</p>
                          : <p className="guest-status">not bringing guest</p>)
                      }
                    </div>
                    {invitation.bringing_children == true
                      ? <p>bringing children</p>
                      : <p className="invisible-line">not bringing children</p>
                    }
                  </div>
                );
              } else {
                return null; // or any other content you want to display for unread invitations
              }
            })}
        </div>
      </div>
    </div>
  )
}

export default ViewRsvps;