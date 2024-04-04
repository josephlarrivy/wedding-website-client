import { useEffect, useState } from "react";
import ApiClient from "../api/api";

import '../styles/NewViewRsvps.css'

const NewViewRsvps = () => {

  const [data, setData] = useState(null)

  const apiRequest = new ApiClient()

  const getAllRsvpData = async () => {
    const response = await apiRequest.getAllSubmittedRsvps()
    console.log(response.data.rsvps)
    setData(response.data.rsvps)
  }

  useEffect(() => {
    getAllRsvpData()
  }, [])

  return(
    <div id="view-rspvs-page-container">
      <h1>RSVP Responses</h1>
      <br />
      <div className="rsvp-table">
        <div className="table-header">
          <div className="table-cell">Index</div>
          <div className="table-cell">Name</div>
          <div className="table-cell">Attending</div>
          <div className="table-cell">Guest Name</div>
          <div className="table-cell">Guest Attending</div>
          <div className="table-cell">Bringing Children</div>
        </div>
        {data?.map((item, index) => {
          return (
            <div className="table-row" key={index}>
              <div className="table-cell">{index + 1}</div>
              <div className="table-cell">{item.person_one_name}</div>
              <div className="table-cell">{item?.person_one_attending ? "attending" : "not attending"}</div>
              <div className="table-cell">{item.person_two_name || "No Guest"}</div>
              <div className="table-cell">{item?.person_two_attending ? "attending" : "no guest"}</div>
              <div className="table-cell">{item?.bringing_children ? "bringing children" : "not bringing children"}</div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
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

export default NewViewRsvps;